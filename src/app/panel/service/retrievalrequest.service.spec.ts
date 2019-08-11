import {inject, TestBed} from '@angular/core/testing';

import {RetrievalRequestService} from './retrievalrequest.service';

describe('RetrievalRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrievalRequestService]
    });
  });

  it('should be created', inject([RetrievalRequestService], (service: RetrievalRequestService) => {
    expect(service).toBeTruthy();
  }));
});
