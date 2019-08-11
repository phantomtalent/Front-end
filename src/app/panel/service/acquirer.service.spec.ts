import {inject, TestBed} from '@angular/core/testing';

import {AcquirerService} from './acquirer.service';

describe('AcquirerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcquirerService]
    });
  });

  it('should be created', inject([AcquirerService], (service: AcquirerService) => {
    expect(service).toBeTruthy();
  }));
});
