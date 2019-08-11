import { Component, Input } from '@angular/core';
import {Transaction, WpfAddresses} from '@utils/models';

@Component({
  selector: 'app-wpf_payments-shipping-details',
  templateUrl: './wpf_payments-shipping-details.component.html',
  styleUrls: ['./wpf_payments-shipping-details.component.scss']
})
export class WpfPaymentsShippingDetailsComponent {

  @Input() shippingAddress: WpfAddresses;

}
