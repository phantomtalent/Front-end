import { Component, Input } from '@angular/core';
import { Transaction } from '@utils/models';

@Component({
  selector: 'app-transaction-full-details',
  templateUrl: './transaction-full-details.component.html',
  styleUrls: ['./transaction-full-details.component.scss']
})
export class TransactionFullDetailsComponent {

  @Input() transaction: Transaction;

}
