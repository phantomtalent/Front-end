import {IMerchantUserFilter, IMerchantUserSearchEvent} from '@utils/interfaces';
import {MerchantUserFilter} from '@utils/models/merchant-user-filter.model';

export class MerchantUserSearchEvent implements IMerchantUserSearchEvent {
  filter = new MerchantUserFilter();
  page = null;
  size = null;

  constructor(c?: IMerchantUserSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new MerchantUserFilter(c.filter);
      }
    }
  }
}
