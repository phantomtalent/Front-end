import { IContractsTerminals } from '@utils/interfaces';

export class ContractsTerminals implements IContractsTerminals {
  id = null;
  name = null;
  contract_id = null;
  terminal_id = null;

  constructor(c?: IContractsTerminals) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.name = c.name ? c.name : null;
      this.contract_id = c.contract_id ? c.contract_id : null;
      this.terminal_id = c.terminal_id ? c.terminal_id : null;
    }
  }
}
