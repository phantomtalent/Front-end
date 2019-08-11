import {IMastercardFraudReportFilter, IMastercardFraudReportSearchEvent} from '@utils/interfaces';
import {MastercardFraudReportFilter} from '@utils/models/mastercardfraudreport-filter.model';

export class MastercardFraudReportSearchEvent implements IMastercardFraudReportSearchEvent {
  filter = new MastercardFraudReportFilter();
  page = null;
  size = null;

  constructor(c?: IMastercardFraudReportSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new MastercardFraudReportFilter(c.filter);
      }
    }
  }
}
