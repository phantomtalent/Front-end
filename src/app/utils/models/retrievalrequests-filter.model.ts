import {IRetrievalRequestFilter} from '@utils/interfaces';

export class RetrievalRequestFilter implements IRetrievalRequestFilter {
  from = null;
  id = null;
  merchant_id = null;
  to = null;

  constructor(c?: IRetrievalRequestFilter) {
    if (c) {
      this.from = c.from ? c.from : null;
      this.id = c.id ? c.id : null;
      this.merchant_id = c.merchant_id ? c.merchant_id : null;
      this.to = c.to ? c.to : null;
    }
  }
}
