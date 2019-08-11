import { Component, Input } from '@angular/core';
import { IProcessingLogs } from '@utils/interfaces';

@Component({
  selector: 'app-wpf-transaction-transaction-logs',
  templateUrl: './wpf_transaction-transaction-logs.component.html',
  styleUrls: ['./wpf_transaction-transaction-logs.component.scss']
})
export class WpfTransactionTransactionLogsComponent {

  @Input() logs: IProcessingLogs[] = [];

}
