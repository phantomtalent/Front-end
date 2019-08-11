import {ResellerFilter} from "./reseller-filter";

export class ResellerSearchEvent {
  constructor(
    public filter: ResellerFilter,
    public page: number,
    public size: number
  ) {}
}
