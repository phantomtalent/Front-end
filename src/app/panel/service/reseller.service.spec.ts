import {inject, TestBed} from '@angular/core/testing';

import {ResellerService} from './reseller.service';

describe('ResellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResellerService]
    });
  });

  it('should be created', inject([ResellerService], (service: ResellerService) => {
    expect(service).toBeTruthy();
  }));
});
