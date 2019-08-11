import {inject, TestBed} from '@angular/core/testing';

import {WpfPaymentsService} from './wpf_payments.service';

describe('WpfPaymentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpfPaymentsService]
    });
  });

  it('should be created', inject([WpfPaymentsService], (service: WpfPaymentsService) => {
    expect(service).toBeTruthy();
  }));
});
