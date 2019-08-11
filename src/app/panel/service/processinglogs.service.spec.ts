import {inject, TestBed} from '@angular/core/testing';

import {ProcessingLogsService} from './processinglogs.service';

describe('ProcessingLogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessingLogsService]
    });
  });

  it('should be created', inject([ProcessingLogsService], (service: ProcessingLogsService) => {
    expect(service).toBeTruthy();
  }));
});
