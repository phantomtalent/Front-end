import {ITransactionNotesFilter, ITransactionNotesSearchEvent} from '@utils/interfaces';
import {TransactionNotesFilter} from '@utils/models/transaction_notes-filter.model';

export class TransactionNotesSearchEvent implements ITransactionNotesSearchEvent {
  filter = new TransactionNotesFilter();
  page = null;
  size = null;

  constructor(c?: ITransactionNotesSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new TransactionNotesFilter(c.filter);
      }
    }
  }
}
