import { Component, Input } from '@angular/core';
import { IMastercardFraudReport } from '@utils/interfaces';

@Component({
  selector: 'app-additional-mastercard-fraud-report',
  templateUrl: './additional-mastercard-fraud-report.component.html',
  styleUrls: ['./additional-mastercard-fraud-report.component.scss']
})
export class AdditionalMastercardFraudReportComponent {
  @Input() mastercardfraudreports: IMastercardFraudReport[] = [];
}
