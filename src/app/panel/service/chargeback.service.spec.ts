import {inject, TestBed} from '@angular/core/testing';

import {ChargebackService} from './chargeback.service';

describe('ChargebackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChargebackService]
    });
  });

  it('should be created', inject([ChargebackService], (service: ChargebackService) => {
    expect(service).toBeTruthy();
  }));
});
