import {IMerchantFilter, IMerchantSearchEvent} from '@utils/interfaces';
import {MerchantFilter} from '@utils/models/merchant-filter.model';

export class MerchantSearchEvent implements IMerchantSearchEvent {
  filter = new MerchantFilter();
  page = null;
  size = null;

  constructor(c?: IMerchantSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new MerchantFilter(c.filter);
      }
    }
  }
}
