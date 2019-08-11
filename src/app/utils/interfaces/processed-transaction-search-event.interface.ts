import {IProcessedTransactionFilter} from '@utils/interfaces/processed-transaction-filter.interface';

export interface IProcessedTransactionSearchEvent {
  filter: IProcessedTransactionFilter;
  page: number;
  size: number;
}
