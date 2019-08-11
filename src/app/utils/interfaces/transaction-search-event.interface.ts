import {ITransactionFilter} from '@utils/interfaces/transaction-filter.interface';

export interface ITransactionSearchEvent {
  filter: ITransactionFilter;
  page: number;
  size: number;
}
