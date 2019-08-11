import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MastercardFraudReportFilter } from '../domain/mastercardfraudreport-filter';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { MastercardFraudReport } from '../domain/mastercardfraudreport';
import { IPagedResult } from '../common/paged-result';
import { HttpUtils } from '../common/http-utils';
import { DateUtil } from '../common/date-util';
import { IPagination, IMastercardFraudReport, IMastercardFraudReportFilter } from '@utils/interfaces';
import { Pagination } from '@utils/models';

@Injectable({
  providedIn: 'root'
})
export class MastercardFraudReportService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IMastercardFraudReportFilter): Observable<IPagedResult<IMastercardFraudReport>> {

    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IMastercardFraudReport>>(environment.api.urls.mastercardfraudreports.base, { params: pagedFilter });
  }

  private buildFilterParams(filter?: IMastercardFraudReportFilter): HttpParams {
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

  save(transaction: IMastercardFraudReport) {
    return this.http.post(environment.api.urls.mastercardfraudreports.base, transaction);
  }

  persist(transaction: IMastercardFraudReport) {
    return this.http.post(environment.api.urls.mastercardfraudreports.persist(transaction.id), transaction);
  }

  get(transactionId: number): Observable<IMastercardFraudReport> {
    return this.http.get<IMastercardFraudReport>(environment.api.urls.mastercardfraudreports.get(transactionId));
  }

  additionalMastercardfraudreport(transactionId: number): Observable<IMastercardFraudReport[]> {
    return this.http.get<IMastercardFraudReport[]>(environment.api.urls.mastercardfraudreports.getReference_transaction_id(transactionId));
  }

  export() {
    return this.http.get(environment.api.urls.mastercardfraudreports.export, { responseType: 'blob' });
  }
}
