import {IAcquirerFilter, IAcquirerSearchEvent} from '@utils/interfaces';
import {AcquirerFilter} from '@utils/models/acquirer-filter.model';

export class AcquirerSearchEvent implements IAcquirerSearchEvent {
  filter = new AcquirerFilter();
  page = null;
  size = null;

  constructor(c?: IAcquirerSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new AcquirerFilter(c.filter);
      }
    }
  }
}
