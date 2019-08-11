import {ProcessingLogsFilter} from "./processinglogs-filter";

export class ProcessingLogsSearchEvent {
  constructor(
    public filter: ProcessingLogsFilter,
    public page: number,
    public size: number
  ) {}
}
