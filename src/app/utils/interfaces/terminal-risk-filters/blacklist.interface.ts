import {ITerminalRiskFilterSetting} from '@utils/interfaces';

export interface IBlacklistRiskFilterSettings {
  possible_values: ITerminalRiskFilterSetting<string[]>;
  transaction_types: ITerminalRiskFilterSetting<string[]>;
  card_brands: ITerminalRiskFilterSetting<string[]>;
}
