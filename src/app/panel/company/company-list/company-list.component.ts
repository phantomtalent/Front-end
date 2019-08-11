import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../service/company.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import {IPagination, ICompany, ICompanyFilter} from '@utils/interfaces';
import {Pagination} from '@utils/models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IPagedResult} from '@app/panel/common/paged-result';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  pagination: IPagination = new Pagination();

  formGroup = new FormGroup({
    searchText: new FormControl(),
    searchType: new FormControl()
  });

  companies: ICompany[];

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/companies' }, { name: 'Companies' }]);
    const pagedResult: IPagedResult<ICompany> = (<IPagedResult<ICompany>>this.route.snapshot.data['pagedResult']);

    if (pagedResult) {
      this.companies = pagedResult.content;
      this.pagination.total = pagedResult.totalPages;
    }

    this.initForm();
  }

  initForm() {
    this.formGroup.get("searchType").setValue("all");
    this.formGroup.get("searchText").valueChanges.subscribe(() => { this.showHighlight = false; });
  }


  showHighlight: boolean = false;
  highlight(column: string): boolean {
    let type: string = this.formGroup.get("searchType").value;

    if (type == "all")
      return true;

    return this.formGroup.get("searchType").value == column;
  }

  search(resetPaging: boolean = true) {
    if (this.formGroup.valid) {
      this.formGroup.disable();

      if (resetPaging === true)
        this.pagination.current = 1;

      let searchType = this.formGroup.get("searchType").value;
      let searchText = this.formGroup.get("searchText").value;

      let filter: ICompanyFilter = {};

      if (searchType == null || searchType == "" || searchType.trim() == "") {
        searchType = "all";
        this.formGroup.get("searchType").setValue(searchType);
      }


      if (searchType == "all") {
        filter = {
          name: searchText
        }
      }
      else {
        filter = {
          name: searchType == "name" ? searchText : null
        }
      }

      this.companyService.search(this.pagination, filter)
        .subscribe(result => {
          this.formGroup.enable();
          this.companies = result.content;
          this.pagination.total = result.totalPages;
          this.showHighlight = true;
        }, (error) => {
          this.formGroup.enable();
        });
    }
  }


  escape = (str: string) =>  str.replace(/[\[\]\/{}()*+?.\\^$|-]/g, "\\$&");

  get searchText(): string {
    if (this.showHighlight) {
      let expression = this.formGroup.get("searchText").value;
      if (expression) {
        return this.escape(expression);
      }
    }

    return null;
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
    this.companyService.export().subscribe(data => {
      const a = document.createElement('a');

      a.href = window.URL.createObjectURL(data);
      a.download = 'export.xls';
      a.click();
    });
  }


  onSearchTypeChange(type: string) {
    console.log(type);
  }

}
