import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { VisaFraudReportFilter } from '../domain/visafraudreport-filter';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { VisaFraudReport } from '../domain/visafraudreport';
import { IPagedResult } from '../common/paged-result';
import { HttpUtils } from '../common/http-utils';
import { DateUtil } from '../common/date-util';
import { IPagination, IVisaFraudReport, IVisaFraudReportFilter } from '@utils/interfaces';
import { Pagination } from '@utils/models';

@Injectable({
  providedIn: 'root'
})
export class VisaFraudReportService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IVisaFraudReportFilter): Observable<IPagedResult<IVisaFraudReport>> {

    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IVisaFraudReport>>(environment.api.urls.visafraudreports.base, { params: pagedFilter });
  }

  private buildFilterParams(filter?: IVisaFraudReportFilter): HttpParams {
    let params = new HttpParams();

    if (filter) {
      if (filter.merchant_id) {
        params = params.append('merchant_id', filter.merchant_id);
      }
      if (filter.id) {
        params = params.append('unique_id', filter.id);
      }

      if (filter.from) {
        params = params.append('from', DateUtil.offsetDate(filter.from.toISOString()));
      }

      if (filter.to) {
        params = params.append('to', DateUtil.offsetDate(filter.to.toISOString()));
      }

      if (filter.selectedFilters) {
        filter.selectedFilters.forEach(f => {
          if (f.filter != null && f.filter.filterValue != null && f.selectedFilterValue != null)
            params = params.append(f.filter.filterValue, f.selectedFilterValue)
        });
      }
    }

    return params;
  }

  save(transaction: IVisaFraudReport) {
    return this.http.post(environment.api.urls.visafraudreports.base, transaction);
  }

  persist(transaction: IVisaFraudReport) {
    return this.http.post(environment.api.urls.visafraudreports.persist(transaction.id), transaction);
  }

  get(transactionId: number): Observable<IVisaFraudReport> {
    return this.http.get<IVisaFraudReport>(environment.api.urls.visafraudreports.get(transactionId));
  }

  additionalVisafraudreports(transactionId: number): Observable<IVisaFraudReport[]> {
    return this.http.get<IVisaFraudReport[]>(environment.api.urls.visafraudreports.getReference_transaction_id(transactionId));
  }

  export() {
    return this.http.get(environment.api.urls.visafraudreports.export, { responseType: 'blob' });
  }
}
