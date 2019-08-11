import { Component, Input } from '@angular/core';
import { IVisaFraudReport } from '@utils/interfaces';

@Component({
  selector: 'app-additional-visa-fraud-report',
  templateUrl: './additional-visa-fraud-report.component.html',
  styleUrls: ['./additional-visa-fraud-report.component.scss']
})
export class AdditionalVisaFraudReportComponent {
  @Input() visafraudreports: IVisaFraudReport[] = [];
}
