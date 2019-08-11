import {IBlacklistRiskFilterSettings} from '@utils/interfaces/terminal-risk-filters';
import {TerminalRiskFilterFormSchemeFieldType} from '@utils/interfaces';

export class BlacklistRiskFilterSettings implements IBlacklistRiskFilterSettings {
  possible_values = {
    name: 'Possible value(s)',
    value: [],
    type: TerminalRiskFilterFormSchemeFieldType.MultiSelect,
    options: ['user_id', 'ssn', 'mac_address', 'email', 'phone', 'remote_ip', 'session_id', 'serial_number']
  };
  transaction_types = {
    name: 'Transaction types',
    value: [],
    type: TerminalRiskFilterFormSchemeFieldType.MultiSelect,
    options: ['SaleTransaction', 'Sale3dTransaction', 'AuthorizeTransaction']
  };
  card_brands = {
    name: 'Card brands',
    value: [],
    type: TerminalRiskFilterFormSchemeFieldType.MultiSelect,
    options: ['visa', 'master', 'amex', 'jsb']
  };

  constructor(c?: IBlacklistRiskFilterSettings) {
    if (c) {
      this.possible_values.value = c.possible_values ? c.possible_values.value : [];
      this.transaction_types.value = c.transaction_types ? c.transaction_types.value : [];
      this.card_brands.value = c.card_brands ? c.card_brands.value : [];
    }
  }
}
