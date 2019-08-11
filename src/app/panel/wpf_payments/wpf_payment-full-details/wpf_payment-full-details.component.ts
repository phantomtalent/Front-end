import { Component, Input } from '@angular/core';
import { Transaction } from '@utils/models';
import {WpfPayments} from "@utils/models";

@Component({
  selector: 'app-wpf_payment-full-details',
  templateUrl: './wpf_payment-full-details.component.html',
  styleUrls: ['./wpf_payment-full-details.component.scss']
})
export class WpfPaymentFullDetailsComponent {

  @Input() wpfPayment: WpfPayments;

}
