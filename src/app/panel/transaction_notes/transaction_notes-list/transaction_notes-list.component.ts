import { Component, OnInit } from '@angular/core';
import { TransactionNotesService } from '../../service/transaction_notes.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { IPagination, ITransactionNotes } from '@utils/interfaces';
import { Pagination } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IPagedResult } from '@app/panel/common/paged-result';

@Component({
  selector: 'app-transaction-notes-list',
  templateUrl: './transaction_notes-list.component.html',
  styleUrls: ['./transaction_notes-list.component.scss']
})
export class TransactionNotesListComponent implements OnInit {

  pagination: IPagination = new Pagination();

  formGroup = new FormGroup({
    id: new FormControl(null, [Validators.maxLength(255)]),
    name: new FormControl(null, [Validators.maxLength(255)]),
    from: new FormControl(null),
    to: new FormControl(null)
  });

  transactionNotes: ITransactionNotes[];

  constructor(private transactionNotesService: TransactionNotesService,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Payment Transactions', slug: '/panel/transactions' }, { name: 'Transactions Notes' }]);
    const pagedResult: IPagedResult<ITransactionNotes> = (<IPagedResult<ITransactionNotes>>this.route.snapshot.data['pagedResult']);

    if (pagedResult) {
      this.transactionNotes = pagedResult.content;
      this.pagination.total = pagedResult.totalPages;
    }
  }

  search() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.transactionNotesService.search(this.pagination, this.formGroup.value)
        .subscribe(result => {
          this.formGroup.enable();
          this.transactionNotes = result.content;
          this.pagination.total = result.totalPages;
        }, (error) => {
          this.formGroup.enable();
        });
    }
  }

  changePage(event: number) {
    this.pagination.current = event;
    this.search();
  }

  clear() {
    this.formGroup.reset();
    this.search();
  }

  export() {
    this.transactionNotesService.export().subscribe(data => {
      const a = document.createElement('a');

      a.href = window.URL.createObjectURL(data);
      a.download = 'export.xls';
      a.click();
    });
  }

}
