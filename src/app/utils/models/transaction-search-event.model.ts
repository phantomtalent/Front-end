import {ITransactionFilter, ITransactionSearchEvent} from '@utils/interfaces';
import {TransactionFilter} from '@utils/models/transaction-filter.model';

export class TransactionSearchEvent implements ITransactionSearchEvent {
  filter = new TransactionFilter();
  page = null;
  size = null;

  constructor(c?: ITransactionSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new TransactionFilter(c.filter);
      }
    }
  }
}
