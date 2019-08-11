import {IWpfPaymentsFilter} from '@utils/interfaces/wpf_payments-filter.interface';

export interface IWpfPaymentsSearchEvent {
  filter: IWpfPaymentsFilter;
  page: number;
  size: number;
}
