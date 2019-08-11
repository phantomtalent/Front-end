import {IChargebackFilter} from '@utils/interfaces/chargeback-filter.interface';

export interface IChargebackSearchEvent {
  filter: IChargebackFilter;
  page: number;
  size: number;
}
