import { Component, OnInit } from '@angular/core';
import { MastercardFraudReportService } from '../../service/mastercardfraudreport.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { IPagination, IMastercardFraudReport } from '@utils/interfaces';
import { Pagination } from '@utils/models';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IPagedResult } from '@app/panel/common/paged-result';
import { MerchantService } from '@app/panel/service/merchant.service';
import { MerchantList } from '@app/panel/domain/merchant-list';
import { TerminalService } from '@app/panel/service/terminal.service';

@Component({
  selector: 'app-mastercard-fraud-report-list',
  templateUrl: './mastercard-fraud-report-list.component.html',
  styleUrls: ['./mastercard-fraud-report-list.component.scss']
})
export class MastercardFraudReportListComponent implements OnInit {

  pagination: IPagination = new Pagination();

  formGroup = new FormGroup({
    id: new FormControl(null, [Validators.maxLength(255)]),
    merchant_id: new FormControl(null, [Validators.maxLength(255)]),
    from: new FormControl(null),
    to: new FormControl(null),

    selectedFilters: new FormArray([
      new FormGroup({
        filter: new FormGroup({
          filterValue: new FormControl(),
          filterName: new FormControl()
        }),
        filterOption: new FormControl(),
        selectedFilterValue: new FormControl()
      })
    ])
  });

  mastercardfraudreports: IMastercardFraudReport[];

  constructor(
    private mastercardfraudreportService: MastercardFraudReportService,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private merchantService: MerchantService,
    private terminalService: TerminalService
  ) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Payment Transactions' }]);
    const pagedResult: IPagedResult<IMastercardFraudReport> = (<IPagedResult<IMastercardFraudReport>>this.route.snapshot.data['pagedResult']);

    if (pagedResult) {
      this.mastercardfraudreports = pagedResult.content;
      this.pagination.total = pagedResult.totalPages;
    }

    this.initOptionValues();
  }

  search(resetPaging: boolean = true) {
    if (this.formGroup.valid) {
      this.formGroup.disable();

      if (resetPaging === true)
      this.pagination.current = 1;

      this.mastercardfraudreportService.search(this.pagination, this.formGroup.value)
        .subscribe(result => {
          this.formGroup.enable();
          this.mastercardfraudreports = result.content;
          this.pagination.total = result.totalPages;
        }, (error) => {
          this.formGroup.enable();
        });
    }
  }

  changePage(event: number) {
    this.pagination.current = event;
    this.search(false);
  }

  clear() {
    this.formGroup.reset();
    this.search();
  }

  export() {
    this.mastercardfraudreportService.export().subscribe(data => {
      const a = document.createElement('a');

      a.href = window.URL.createObjectURL(data);
      a.download = 'export.xls';
      a.click();
    });
  }

  filterOptions: any[] = [
    { value: null, name: "Please select..." },
    { value: "=", name: "=" },
    { value: "starts with", name: "starts with" },
    { value: "ends with", name: "ends with" },
    { value: "contains", name: "contains" }
  ];

  fieldsModels: FilterModel[] = [
    { value: "status", name: "Status" },
    { value: "created_at", name: "Created at" },
    { value: "merchant_id", name: "Merchant" },
    { value: "terminal_id", name: "Terminal" },
    { value: "error_class", name: "Error class" },
    { value: "type", name: "Type" },
    { value: "merchant_transaction_id", name: "Merchant Transaction ID" },
    { value: "unique_id", name: "Transaction ID" },
    { value: "amount", name: "Amount" },
    { value: "currency", name: "Currency" }
  ]

  onFilterChange(_filter) {
    let _selectedVal = _filter.value,
      _selectedName = <any>(_filter.options[_filter.selectedIndex]).innerText;

    let ctl: FormGroup = new FormGroup({
      filter: new FormGroup({
        filterValue: new FormControl(_selectedVal),
        filterName: new FormControl(_selectedName)
      }),
      filterOption: new FormControl(null),
      selectedFilterValue: new FormControl(null)
    });
    (<FormArray>this.formGroup.get("selectedFilters")).controls.push(ctl);

    _filter.value = null;
  }

  removeFilterAt(index: number) {
    console.log(index);
    (<FormArray>this.formGroup.get("selectedFilters")).removeAt(index);
  }

  optionValues: any = {};

  initOptionValues() {

    this.merchantService.getMerchantsList()
      .subscribe(value => {
        if (value != null) {
          this.optionValues["merchant"] = value;
          this.optionValues["merchant_id"] = value;
        }
      });

    this.terminalService.getTerminalsList()
      .subscribe(value => {
        if (value != null) {
          this.optionValues["terminal_id"] = value;
        }
      });

    this.terminalService.getCurrenciesList()
      .subscribe(value => {
        if (value != null) {
          this.optionValues["currency"] = value.map(i => ({ id: i.currency, name: `${i.currency} - ${i.country}` }));
        }
      });
  }
}


export interface FilterModel {
  value: string;
  name: string;
}
