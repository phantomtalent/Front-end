import { Component, Input } from '@angular/core';
import { IProcessingLogs } from '@utils/interfaces';

@Component({
  selector: 'app-transaction-logs',
  templateUrl: './transaction-logs.component.html',
  styleUrls: ['./transaction-logs.component.scss']
})
export class TransactionLogsComponent {

  @Input() logs: IProcessingLogs[] = [];

}
