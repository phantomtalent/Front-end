export interface IVisaFraudReportFilter {
  id: string;
  merchant_id: string;
  from: Date;
  to: Date;

  selectedFilters?: [
    {
      filter: {
        filterValue: string,
        filterName: string
      },
      filterOption: string,
      selectedFilterValue: string
    }
  ]
}
