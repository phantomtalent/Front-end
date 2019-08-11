import {ITransactionNotesFilter} from '@utils/interfaces';

export class TransactionNotesFilter implements ITransactionNotesFilter {
  from = null;
  id = null;
  name = null;
  to = null;

  constructor(c?: ITransactionNotesFilter) {
    if (c) {
      this.from = c.from ? c.from : null;
      this.id = c.id ? c.id : null;
      this.name = c.name ? c.name : null;
      this.to = c.to ? c.to : null;
    }
  }
}
