import { Component, Input } from '@angular/core';
import { MastercardFraudReport } from '@utils/models';

@Component({
  selector: 'app-mastercard-fraud-report-full-details',
  templateUrl: './mastercard-fraud-report-full-details.component.html',
  styleUrls: ['./mastercard-fraud-report-full-details.component.scss']
})
export class MastercardFraudReportFullDetailsComponent {

  @Input() mastercardfraudreport: MastercardFraudReport;

}
