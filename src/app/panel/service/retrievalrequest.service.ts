import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RetrievalRequestFilter } from '../domain/retrievalrequest-filter';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { RetrievalRequest } from '../domain/retrievalrequest';
import { IPagedResult } from '../common/paged-result';
import { HttpUtils } from '../common/http-utils';
import { DateUtil } from '../common/date-util';
import { IPagination, IRetrievalRequest, IRetrievalRequestFilter } from '@utils/interfaces';
import { Pagination } from '@utils/models';

@Injectable({
  providedIn: 'root'
})
export class RetrievalRequestService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IRetrievalRequestFilter): Observable<IPagedResult<IRetrievalRequest>> {

    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IRetrievalRequest>>(environment.api.urls.retrievalrequests.base, { params: pagedFilter });
  }

  private buildFilterParams(filter?: IRetrievalRequestFilter): HttpParams {
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

  save(retrievalrequest: IRetrievalRequest) {
    return this.http.post(environment.api.urls.retrievalrequests.base, retrievalrequest);
  }

  persist(retrievalrequest: IRetrievalRequest) {
    return this.http.post(environment.api.urls.retrievalrequests.persist(retrievalrequest.id), retrievalrequest);
  }

  get(retrievalrequestId: number): Observable<IRetrievalRequest> {
    return this.http.get<IRetrievalRequest>(environment.api.urls.retrievalrequests.get(retrievalrequestId));
  }

  additionalRetrievalRequests(retrievalrequestId: number): Observable<IRetrievalRequest[]> {
    return this.http.get<IRetrievalRequest[]>(environment.api.urls.retrievalrequests.getReference_transaction_id(retrievalrequestId));
  }

  export() {
    return this.http.get(environment.api.urls.retrievalrequests.export, { responseType: 'blob' });
  }
}
