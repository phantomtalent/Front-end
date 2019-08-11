import {inject, TestBed} from '@angular/core/testing';

import {ApiAttemptService} from './apiattempt.service';

describe('ApiAttemptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiAttemptService]
    });
  });

  it('should be created', inject([ApiAttemptService], (service: ApiAttemptService) => {
    expect(service).toBeTruthy();
  }));
});
