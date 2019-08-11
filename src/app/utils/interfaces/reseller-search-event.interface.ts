import {IResellerFilter} from '@utils/interfaces/reseller-filter.interface';

export interface IResellerSearchEvent {
  filter: IResellerFilter;
  page: number;
  size: number;
}
