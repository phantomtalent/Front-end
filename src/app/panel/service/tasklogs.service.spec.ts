import {inject, TestBed} from '@angular/core/testing';

import {TaskLogsService} from './tasklogs.service';

describe('TaskLogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskLogsService]
    });
  });

  it('should be created', inject([TaskLogsService], (service: TaskLogsService) => {
    expect(service).toBeTruthy();
  }));
});
