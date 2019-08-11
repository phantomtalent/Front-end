import {ITerminalFilter} from '@utils/interfaces/terminal-filter.interface';

export interface ITerminalSearchEvent {
  filter: ITerminalFilter;
  page: number;
  size: number;
}
