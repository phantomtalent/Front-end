import {IResellerUserFilter, IResellerUserSearchEvent} from '@utils/interfaces';
import {ResellerUserFilter} from '@utils/models/reseller-user-filter.model';

export class ResellerUserSearchEvent implements IResellerUserSearchEvent {
  filter = new ResellerUserFilter();
  page = null;
  size = null;

  constructor(c?: IResellerUserSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new ResellerUserFilter(c.filter);
      }
    }
  }
}
