import {IBlacklistFilter, IBlacklistSearchEvent} from '@utils/interfaces';
import {BlacklistFilter} from '@utils/models/blacklist-filter.model';

export class BlacklistSearchEvent implements IBlacklistSearchEvent {
  filter = new BlacklistFilter();
  page = null;
  size = null;

  constructor(c?: IBlacklistSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new BlacklistFilter(c.filter);
      }
    }
  }
}
