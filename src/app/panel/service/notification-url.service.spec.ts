import { TestBed, inject } from '@angular/core/testing';

import { NotificationUrlsService } from './notification-urls.service';

describe('NotificationUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationUrlsService]
    });
  });

  it('should be created', inject([NotificationUrlsService], (service: NotificationUrlsService) => {
    expect(service).toBeTruthy();
  }));
});
