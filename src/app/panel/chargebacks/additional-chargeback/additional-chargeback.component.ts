import { Component, Input } from '@angular/core';
import { IChargeback } from '@utils/interfaces';

@Component({
  selector: 'app-additional-chargebacks',
  templateUrl: './additional-chargeback.component.html',
  styleUrls: ['./additional-chargeback.component.scss']
})
export class AdditionalChargebacksComponent {
  @Input() chargebacks: IChargeback[] = [];
}
