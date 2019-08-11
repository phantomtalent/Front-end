import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {IPagedResult} from '../common/paged-result';
import {HttpUtils} from '../common/http-utils';
import {DateUtil} from '../common/date-util';
import {IPagination, IApiAttempt, IApiAttemptFilter} from '@utils/interfaces';
import {Pagination} from '@utils/models';

@Injectable({
  providedIn: 'root'
})
export class ApiAttemptService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IApiAttemptFilter): Observable<IPagedResult<IApiAttempt>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IApiAttempt>>(environment.api.urls.apiattempts.base, {params: pagedFilter});
  }

  private buildFilterParams(filter?: IApiAttemptFilter): HttpParams {
    let params = new HttpParams();

    if (filter) {
      if (filter.name) {
        params = params.append('name', filter.name);
      }
      if (filter.id) {
        params = params.append('id', filter.id);
      }

      if (filter.from) {
        params = params.append('from', DateUtil.offsetDate(filter.from.toISOString()));
      }

      if (filter.to) {
        params = params.append('to', DateUtil.offsetDate(filter.to.toISOString()));
      }
    }

    return params;
  }

  save(apiAttempt: IApiAttempt) {
    return this.http.post(environment.api.urls.apiattempts.base, apiAttempt);
  }

  persist(apiAttempt: IApiAttempt) {
    return this.http.post(environment.api.urls.apiattempts.persist(apiAttempt.id), apiAttempt);
  }

  get(apiAttemptId: number): Observable<IApiAttempt> {
    return this.http.get<IApiAttempt>(environment.api.urls.apiattempts.get(apiAttemptId));
  }

  export() {
    return this.http.get(environment.api.urls.apiattempts.export,  { responseType: 'blob' });
  }
}
