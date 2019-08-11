import {MastercardFraudReportFilter} from "./mastercardfraudreport-filter";

export class MastercardFraudReportSearchEvent {
  constructor(
    public filter: MastercardFraudReportFilter,
    public page: number,
    public size: number
  ) {}
}
