import {TerminalRiskFilterType} from '@app/panel/domain/terminal-risk-filter-type';
import {ITerminalRiskFilterSettings} from '@app/panel/domain/terminal-risk-filter-settings';

export interface ITerminalRiskFilter {
  id: number;
  terminal_id: number;
  filter_class: TerminalRiskFilterType;
  filter_settings: ITerminalRiskFilterSettings;
  position: number;
  parent_id: number;
  selected: boolean;
}
