import {ContractFilter} from "./contract-filter";

export class ContractSearchEvent {
  constructor(
    public filter: ContractFilter,
    public page: number,
    public size: number
  ) {}
}
