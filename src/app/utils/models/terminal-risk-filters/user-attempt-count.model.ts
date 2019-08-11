import {IUserAttemptCountRiskFilterSettings} from '@utils/interfaces/terminal-risk-filters';
import {TerminalRiskFilterFormSchemeFieldType} from '@utils/interfaces';

export class UserAttemptCountRiskFilterSettings implements IUserAttemptCountRiskFilterSettings {
  user_identity_by = {
    name: 'Parameter to identity the user',
    value: '',
    type: TerminalRiskFilterFormSchemeFieldType.Select,
    options: ['user_id', 'ssn', 'mac_address', 'email', 'phone', 'remote_ip', 'session_id', 'serial_number']
  };
  allow_transactions = {
    name: 'Do not allow transactions without configured risk_param_name',
    value: false,
    type: TerminalRiskFilterFormSchemeFieldType.Checkbox
  };
  context_to_calculate_limits = {
    name: 'Context to calculate the limits',
    value: '',
    type: TerminalRiskFilterFormSchemeFieldType.Select,
    options: ['contract']
  };
  transaction_count = {
    name: 'Transaction count',
    value: 100,
    type: TerminalRiskFilterFormSchemeFieldType.Number
  };
  time_frame_for_transactions = {
    name: 'Time frame for transaction attempt count',
    value: '',
    type: TerminalRiskFilterFormSchemeFieldType.Select,
    options: ['day', 'week', 'month', 'year']
  };
  fixed_time_frame = {
    name: 'Fixed timeframe',
    value: false,
    type: TerminalRiskFilterFormSchemeFieldType.Checkbox
  };

  constructor(c?: IUserAttemptCountRiskFilterSettings) {
    if (c) {
      this.user_identity_by.value = c.user_identity_by ? c.user_identity_by.value : null;
      this.allow_transactions.value = c.allow_transactions ? c.allow_transactions.value : null;
      this.context_to_calculate_limits.value = c.context_to_calculate_limits ? c.context_to_calculate_limits.value : null;
      this.transaction_count.value = c.transaction_count ? c.transaction_count.value : null;
      this.time_frame_for_transactions.value = c.time_frame_for_transactions ? c.time_frame_for_transactions.value : null;
      this.fixed_time_frame.value = c.fixed_time_frame ? c.fixed_time_frame.value : null;
    }
  }
}
