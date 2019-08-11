import {inject, TestBed} from '@angular/core/testing';

import {ResellerUserService} from './reselleruser.service';

describe('ResellerUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResellerUserService]
    });
  });

  it('should be created', inject([ResellerUserService], (service: ResellerUserService) => {
    expect(service).toBeTruthy();
  }));
});
