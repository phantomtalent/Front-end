import {IMerchantFilter} from '@utils/interfaces/merchant-filter.interface';

export interface IMerchantSearchEvent {
  filter: IMerchantFilter;
  page: number;
  size: number;
}
