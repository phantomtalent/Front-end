import { Component, Input } from '@angular/core';
import { Chargeback } from '@utils/models';

@Component({
  selector: 'app-chargeback-full-details',
  templateUrl: './chargeback-full-details.component.html',
  styleUrls: ['./chargeback-full-details.component.scss']
})
export class ChargebackFullDetailsComponent {

  @Input() chargeback: Chargeback;

}
