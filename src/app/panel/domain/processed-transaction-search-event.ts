import {ProcessedTransactionFilter} from "./processed-transaction-filter";

export class ProcessedTransactionSearchEvent {
  constructor(
    public filter: ProcessedTransactionFilter,
    public page: number,
    public size: number
  ) {}
}
