import {IVisaFraudReportFilter, IVisaFraudReportSearchEvent} from '@utils/interfaces';
import {VisaFraudReportFilter} from '@utils/models/visafraudreport-filter.model';

export class VisaFraudReportSearchEvent implements IVisaFraudReportSearchEvent {
  filter = new VisaFraudReportFilter();
  page = null;
  size = null;

  constructor(c?: IVisaFraudReportSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new VisaFraudReportFilter(c.filter);
      }
    }
  }
}
