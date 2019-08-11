import {inject, TestBed} from '@angular/core/testing';

import {MastercardFraudReportService} from './mastercardfraudreport.service';

describe('MastercardFraudReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MastercardFraudReportService]
    });
  });

  it('should be created', inject([MastercardFraudReportService], (service: MastercardFraudReportService) => {
    expect(service).toBeTruthy();
  }));
});
