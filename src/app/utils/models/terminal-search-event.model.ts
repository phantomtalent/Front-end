import {ITerminalFilter, ITerminalSearchEvent} from '@utils/interfaces';
import {TerminalFilter} from '@utils/models/terminal-filter.model';

export class TerminalSearchEvent implements ITerminalSearchEvent {
  filter = new TerminalFilter();
  page = null;
  size = null;

  constructor(c?: ITerminalSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new TerminalFilter(c.filter);
      }
    }
  }
}
