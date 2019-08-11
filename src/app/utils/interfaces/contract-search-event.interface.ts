import {IContractFilter} from '@utils/interfaces/contract-filter.interface';

export interface IContractSearchEvent {
  filter: IContractFilter;
  page: number;
  size: number;
}
