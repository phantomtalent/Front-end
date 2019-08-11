import { Component, Input, OnInit } from '@angular/core';
import { ITransaction } from '@utils/interfaces';
import { TransactionService } from '@app/panel/service/transaction.service';
import { AlertifyService } from '@shared/alertify.service';

@Component({
  selector: 'app-additional-transactions',
  templateUrl: './additional-transactions.component.html',
  styleUrls: ['./additional-transactions.component.scss']
})
export class AdditionalTransactionsComponent implements OnInit {
  @Input() transactions: ITransaction[] = [];

  constructor(
    private alertifyService: AlertifyService,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {

  }

  reconcile(id: number) {
    this.transactionService.reconcile(id).subscribe((result) => {
      this.alertifyService.success('Transaction reconciled');
      this.transactionService.publishRefresh();
    }, err => this.alertifyService.error('Error. Something happened'))
  }
}
