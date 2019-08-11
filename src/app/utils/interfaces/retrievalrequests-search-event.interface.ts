import {IRetrievalRequestFilter} from '@utils/interfaces/retrievalrequests-filter.interface';

export interface IRetrievalRequestSearchEvent {
  filter: IRetrievalRequestFilter;
  page: number;
  size: number;
}
