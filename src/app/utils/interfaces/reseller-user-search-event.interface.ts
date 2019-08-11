import {IResellerUserFilter} from '@utils/interfaces/reseller-user-filter.interface';

export interface IResellerUserSearchEvent {
  filter: IResellerUserFilter;
  page: number;
  size: number;
}
