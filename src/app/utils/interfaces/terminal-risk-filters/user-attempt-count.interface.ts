import {ITerminalRiskFilterSetting} from '@utils/interfaces';

export interface IUserAttemptCountRiskFilterSettings {
  user_identity_by: ITerminalRiskFilterSetting<string>;
  allow_transactions: ITerminalRiskFilterSetting<boolean>;
  context_to_calculate_limits: ITerminalRiskFilterSetting<string>;
  transaction_count: ITerminalRiskFilterSetting<number>;
  time_frame_for_transactions: ITerminalRiskFilterSetting<string>;
  fixed_time_frame: ITerminalRiskFilterSetting<boolean>;
}
