import {inject, TestBed} from '@angular/core/testing';

import {VisaFraudReportService} from './visafraudreport.service';

describe('VisaFraudReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisaFraudReportService]
    });
  });

  it('should be created', inject([VisaFraudReportService], (service: VisaFraudReportService) => {
    expect(service).toBeTruthy();
  }));
});
