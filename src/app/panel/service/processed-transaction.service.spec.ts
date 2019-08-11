import {inject, TestBed} from '@angular/core/testing';

import {ProcessedTransactionService} from './processed-transaction.service';

describe('TransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessedTransactionService]
    });
  });

  it('should be created', inject([ProcessedTransactionService], (service: ProcessedTransactionService) => {
    expect(service).toBeTruthy();
  }));
});
