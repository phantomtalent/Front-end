import {IApiAttemptFilter} from '@utils/interfaces/apiattempt-filter.interface';

export interface IApiAttemptSearchEvent {
  filter: IApiAttemptFilter;
  page: number;
  size: number;
}
