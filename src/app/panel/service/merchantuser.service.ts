import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {IPagedResult} from '../common/paged-result';
import {HttpUtils} from '../common/http-utils';
import {DateUtil} from '../common/date-util';
import {IPagination, IMerchantUser, IMerchantUserFilter} from '@utils/interfaces';
import {Pagination} from '@utils/models';

@Injectable({
  providedIn: 'root'
})
export class MerchantUserService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IMerchantUserFilter): Observable<IPagedResult<IMerchantUser>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IMerchantUser>>(environment.api.urls.merchant_users.find, {params: pagedFilter});
  }

  private buildFilterParams(filter?: IMerchantUserFilter): HttpParams {
    let params = new HttpParams();

    if (filter) {
      if (filter.name) {
        params = params.append('name', filter.name);
      }

      if (filter.login) {
        params = params.append('login', filter.login);
      }

      if (filter.email) {
        params = params.append('email', filter.email);
      }
    }

    return params;
  }

  save(user: IMerchantUser) {
    return this.http.post(environment.api.urls.merchant_users.create, user);
  }

  persist(user: IMerchantUser) {
    return this.http.post(environment.api.urls.merchant_users.persist(user.id), user);
  }

  get(userId: number): Observable<IMerchantUser> {
    return this.http.get<IMerchantUser>(environment.api.urls.merchant_users.get(userId));
  }

  export() {
    return this.http.get(environment.api.urls.merchant_users.export,  { responseType: 'blob' });
  }
}
