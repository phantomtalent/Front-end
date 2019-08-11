import { Component, Input } from '@angular/core';
import { Transaction } from '@utils/models';
import {IAddresses} from "@utils/interfaces";

@Component({
  selector: 'app-transaction-billing-address',
  templateUrl: './transaction-billing-address.component.html',
  styleUrls: ['./transaction-billing-address.component.scss']
})
export class TransactionBillingAddressDetailsComponent {

  @Input() billingAddress: IAddresses;

}
