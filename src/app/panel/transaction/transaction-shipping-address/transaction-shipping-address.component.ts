import { Component, Input } from '@angular/core';
import { Transaction } from '@utils/models';
import {IAddresses} from "@utils/interfaces";

@Component({
  selector: 'app-transaction-shipping-address',
  templateUrl: './transaction-shipping-address.component.html',
  styleUrls: ['./transaction-shipping-address.component.scss']
})
export class TransactionShippingAddressDetailsComponent {

  @Input() shippingAddress: IAddresses;

}
