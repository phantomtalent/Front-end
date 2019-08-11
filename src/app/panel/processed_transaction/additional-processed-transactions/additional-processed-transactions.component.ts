import { Component, Input } from '@angular/core';
import { IProcessedTransaction } from '@utils/interfaces';

@Component({
  selector: 'app-additional-processed-transactions',
  templateUrl: './additional-processed-transactions.component.html',
  styleUrls: ['./additional-processed-transactions.component.scss']
})
export class AdditionalProcessedTransactionComponent {
  @Input() processedTransactions: IProcessedTransaction[] = [];
}
