import {IProcessedTransactionFilter, IProcessedTransactionSearchEvent} from '@utils/interfaces';
import {ProcessedTransactionFilter} from '@utils/models/processed-transaction-filter.model';

export class ProcessedTransactionSearchEvent implements IProcessedTransactionSearchEvent {
  filter = new ProcessedTransactionFilter();
  page = null;
  size = null;

  constructor(c?: IProcessedTransactionSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new ProcessedTransactionFilter(c.filter);
      }
    }
  }
}
