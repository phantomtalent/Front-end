import {MerchantFilter} from "./merchant-filter";

export class MerchantSearchEvent {
  constructor(
    public filter: MerchantFilter,
    public page: number,
    public size: number
  ) {}
}
