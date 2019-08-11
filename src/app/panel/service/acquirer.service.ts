import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {IPagedResult} from '../common/paged-result';
import {HttpUtils} from '../common/http-utils';
import {DateUtil} from '../common/date-util';
import {IPagination, IAcquirer, IAcquirerFilter} from '@utils/interfaces';
import {Pagination} from '@utils/models';
import {AcquirerList} from '@app/panel/domain/acquirer-list';
import {AcquirerCountryList} from '@app/panel/domain/acquirer-country-list';
import {AcquirerTimezoneList} from '@app/panel/domain/acquirer-timezone-list';

@Injectable({
  providedIn: 'root'
})
export class AcquirerService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IAcquirerFilter): Observable<IPagedResult<IAcquirer>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IAcquirer>>(environment.api.urls.acquirers.find, {params: pagedFilter});
  }

  getAcquirersList(): Observable<Array<AcquirerList>> {
    return this.http.get<Array<AcquirerList>>(environment.api.urls.acquirers.getAcquirers);
  }

  getCountryList(): Observable<Array<AcquirerCountryList>> {
    return this.http.get<Array<AcquirerCountryList>>(environment.api.urls.acquirers.getCountryList);
  }

  getTimezoneList(): Observable<Array<AcquirerTimezoneList>> {
    return this.http.get<Array<AcquirerTimezoneList>>(environment.api.urls.acquirers.getTimezoneList);
  }

  private buildFilterParams(filter?: IAcquirerFilter): HttpParams {
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

  save(acquirer: IAcquirer) {
    return this.http.post(environment.api.urls.acquirers.create, acquirer);
  }

  persist(acquirer: IAcquirer) {
    return this.http.post(environment.api.urls.acquirers.persist(acquirer.id), acquirer);
  }

  get(acquirerId: number): Observable<IAcquirer> {
    return this.http.get<IAcquirer>(environment.api.urls.acquirers.get(acquirerId));
  }

  export() {
    return this.http.get(environment.api.urls.acquirers.export,  { responseType: 'blob' });
  }
}
