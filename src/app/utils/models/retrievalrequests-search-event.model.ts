import {IRetrievalRequestFilter, IRetrievalRequestSearchEvent} from '@utils/interfaces';
import {RetrievalRequestFilter} from '@utils/models/retrievalrequests-filter.model';

export class RetrievalRequestSearchEvent implements IRetrievalRequestSearchEvent {
  filter = new RetrievalRequestFilter();
  page = null;
  size = null;

  constructor(c?: IRetrievalRequestSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new RetrievalRequestFilter(c.filter);
      }
    }
  }
}
