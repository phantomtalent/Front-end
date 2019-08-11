import { Component, Input } from '@angular/core';
import { VisaFraudReport } from '@utils/models';

@Component({
  selector: 'app-visa-fraud-report-full-details',
  templateUrl: './visa-fraud-report-full-details.component.html',
  styleUrls: ['./visa-fraud-report-full-details.component.scss']
})
export class VisaFraudReportFullDetailsComponent {

  @Input() visafraudreport: VisaFraudReport;

}
