import { ICurrency } from '@utils/interfaces';

export class Currency implements ICurrency {
  id = null;
  contract_id = null;
  code = null;

  constructor(c?: ICurrency) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.contract_id = c.contract_id ? c.contract_id : null;
      this.code = c.code ? c.code : null;
    }
  }
}
