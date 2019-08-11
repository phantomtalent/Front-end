import {IContractFilter, IContractSearchEvent} from '@utils/interfaces';
import {ContractFilter} from '@utils/models/contract-filter.model';

export class ContractSearchEvent implements IContractSearchEvent {
  filter = new ContractFilter();
  page = null;
  size = null;

  constructor(c?: IContractSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new ContractFilter(c.filter);
      }
    }
  }
}
