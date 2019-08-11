import {ApiAttemptFilter} from "./apiattempt-filter";

export class ApiAttemptSearchEvent {
  constructor(
    public filter: ApiAttemptFilter,
    public page: number,
    public size: number
  ) {}
}
