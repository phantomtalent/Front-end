import { Component, Input } from '@angular/core';
import { ProcessedTransaction } from '@utils/models';

@Component({
  selector: 'app-processed-transaction-full-details',
  templateUrl: './processed-transaction-full-details.component.html',
  styleUrls: ['./processed-transaction-full-details.component.scss']
})
export class ProcessedTransactionFullDetailsComponent {

  @Input() processedTransaction: ProcessedTransaction;

}
