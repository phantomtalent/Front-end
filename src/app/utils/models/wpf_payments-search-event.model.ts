import {IWpfPaymentsFilter, IWpfPaymentsSearchEvent} from '@utils/interfaces';
import {WpfPaymentsFilter} from '@utils/models/wpf_payments-filter.model';

export class WpfPaymentsSearchEvent implements IWpfPaymentsSearchEvent {
  filter = new WpfPaymentsFilter();
  page = null;
  size = null;

  constructor(c?: IWpfPaymentsSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new WpfPaymentsFilter(c.filter);
      }
    }
  }
}
