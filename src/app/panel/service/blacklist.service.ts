import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {IPagedResult} from '../common/paged-result';
import {HttpUtils} from '../common/http-utils';
import {DateUtil} from '../common/date-util';
import {IPagination, IBlacklist, IBlacklistFilter} from '@utils/interfaces';
import {Pagination} from '@utils/models';

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IBlacklistFilter): Observable<IPagedResult<IBlacklist>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IBlacklist>>(environment.api.urls.blacklists.base, {params: pagedFilter});
  }

  private buildFilterParams(filter?: IBlacklistFilter): HttpParams {
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

  save(blacklist: IBlacklist) {
    return this.http.post(environment.api.urls.blacklists.create, blacklist);
  }

  persist(blacklist: IBlacklist) {
    return this.http.post(environment.api.urls.blacklists.persist(blacklist.id), blacklist);
  }

  get(blacklistId: number): Observable<IBlacklist> {
    return this.http.get<IBlacklist>(environment.api.urls.blacklists.get(blacklistId));
  }

  export() {
    return this.http.get(environment.api.urls.blacklists.export,  { responseType: 'blob' });
  }
}
