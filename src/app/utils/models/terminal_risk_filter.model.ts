import {ITerminalRiskFilter} from '@utils/interfaces';

export class TerminalRiskFilter implements ITerminalRiskFilter {
  id = null;
  terminal_id = null;
  filter_class = null;
  filter_settings = null;
  position = null;
  parent_id = null;
  selected = false;

  constructor(c?: ITerminalRiskFilter) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.terminal_id = c.terminal_id ? c.terminal_id : null;
      this.filter_class = c.filter_class ? c.filter_class : null;
      this.filter_settings = c.filter_settings ? c.filter_settings : null;
      this.position = c.position ? c.position : null;
      this.parent_id = c.parent_id ? c.parent_id : null;
      this.selected = c.selected ? c.selected : null;
    }
  }
}
