import {inject, TestBed} from '@angular/core/testing';

import {MerchantUserService} from './merchantuser.service';

describe('MerchantUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MerchantUserService]
    });
  });

  it('should be created', inject([MerchantUserService], (service: MerchantUserService) => {
    expect(service).toBeTruthy();
  }));
});
