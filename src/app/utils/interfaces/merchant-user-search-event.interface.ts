import {IMerchantUserFilter} from '@utils/interfaces/merchant-user-filter.interface';

export interface IMerchantUserSearchEvent {
  filter: IMerchantUserFilter;
  page: number;
  size: number;
}
