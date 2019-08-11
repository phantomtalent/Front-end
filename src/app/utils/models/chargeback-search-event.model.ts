import {IChargebackFilter, IChargebackSearchEvent} from '@utils/interfaces';
import {ChargebackFilter} from '@utils/models/chargeback-filter.model';

export class ChargebackSearchEvent implements IChargebackSearchEvent {
  filter = new ChargebackFilter();
  page = null;
  size = null;

  constructor(c?: IChargebackSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new ChargebackFilter(c.filter);
      }
    }
  }
}
