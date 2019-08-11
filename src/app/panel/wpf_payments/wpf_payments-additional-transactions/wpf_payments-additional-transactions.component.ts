import { Component, Input } from '@angular/core';
import { IWpfPayments } from '@utils/interfaces';

@Component({
  selector: 'app-wpf-payments-additional-transactions',
  templateUrl: './wpf_payments-additional-transactions.component.html',
  styleUrls: ['./wpf_payments-additional-transactions.component.scss']
})
export class WpfPaymentsAdditionalTransactionsComponent {
  @Input() wpfPayments: IWpfPayments[] = [];
}
