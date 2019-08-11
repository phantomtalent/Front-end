import {TerminalFilter} from "./terminal-filter";

export class TerminalSearchEvent {
  constructor(
    public filter: TerminalFilter,
    public page: number,
    public size: number
  ) {}
}
