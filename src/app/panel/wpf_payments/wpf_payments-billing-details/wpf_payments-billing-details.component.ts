import { Component, Input } from '@angular/core';
import {Transaction, WpfAddresses} from '@utils/models';

@Component({
  selector: 'app-wpf_payments-billing-details',
  templateUrl: './wpf_payments-billing-details.component.html',
  styleUrls: ['./wpf_payments-billing-details.component.scss']
})
export class WpfPaymentsBillingDetailsComponent {

  @Input() billingAddress: WpfAddresses;

}
