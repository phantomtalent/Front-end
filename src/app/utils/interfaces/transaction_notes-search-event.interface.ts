import {ITransactionNotesFilter} from '@utils/interfaces/transaction_notes-filter.interface';

export interface ITransactionNotesSearchEvent {
  filter: ITransactionNotesFilter;
  page: number;
  size: number;
}
