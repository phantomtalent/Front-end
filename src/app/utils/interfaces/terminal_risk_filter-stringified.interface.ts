import {TerminalRiskFilterType} from '@app/panel/domain/terminal-risk-filter-type';

export interface ITerminalRiskFilterStringified {
  id: number;
  terminal_id: number;
  filter_class: TerminalRiskFilterType;
  filter_settings: string;
  position: number;
  parent_id: number;
}
