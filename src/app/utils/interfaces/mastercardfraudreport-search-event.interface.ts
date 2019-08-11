import {IMastercardFraudReportFilter} from '@utils/interfaces/mastercardfraudreport-filter.interface';

export interface IMastercardFraudReportSearchEvent {
  filter: IMastercardFraudReportFilter;
  page: number;
  size: number;
}
