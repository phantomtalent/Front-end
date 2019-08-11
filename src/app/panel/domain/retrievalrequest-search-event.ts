import {RetrievalRequestFilter} from "./retrievalrequest-filter";

export class RetrievalRequestSearchEvent {
  constructor(
    public filter: RetrievalRequestFilter,
    public page: number,
    public size: number
  ) {}
}
