import {IVisaFraudReportFilter} from '@utils/interfaces/visafraudreport-filter.interface';

export interface IVisaFraudReportSearchEvent {
  filter: IVisaFraudReportFilter;
  page: number;
  size: number;
}
