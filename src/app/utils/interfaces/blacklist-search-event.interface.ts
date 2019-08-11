import {IBlacklistFilter} from '@utils/interfaces/blacklist-filter.interface';

export interface IBlacklistSearchEvent {
  filter: IBlacklistFilter;
  page: number;
  size: number;
}
