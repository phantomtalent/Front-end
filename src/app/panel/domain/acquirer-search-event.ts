import {AcquirerFilter} from "./acquirer-filter";

export class AcquirerSearchEvent {
  constructor(
    public filter: AcquirerFilter,
    public page: number,
    public size: number
  ) {}
}
