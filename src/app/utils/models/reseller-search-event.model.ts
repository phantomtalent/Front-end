import {IResellerFilter, IResellerSearchEvent} from '@utils/interfaces';
import {ResellerFilter} from '@utils/models/reseller-filter.model';

export class ResellerSearchEvent implements IResellerSearchEvent {
  filter = new ResellerFilter();
  page = null;
  size = null;

  constructor(c?: IResellerSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new ResellerFilter(c.filter);
      }
    }
  }
}
