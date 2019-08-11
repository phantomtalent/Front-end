import {IAcquirerFilter} from '@utils/interfaces/acquirer-filter.interface';

export interface IAcquirerSearchEvent {
  filter: IAcquirerFilter;
  page: number;
  size: number;
}
