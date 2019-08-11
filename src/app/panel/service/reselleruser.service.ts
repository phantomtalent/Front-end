import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {IPagedResult} from '../common/paged-result';
import {HttpUtils} from '../common/http-utils';
import {DateUtil} from '../common/date-util';
import {IPagination, IResellerUser, IResellerUserFilter} from '@utils/interfaces';
import {Pagination} from '@utils/models';

@Injectable({
  providedIn: 'root'
})
export class ResellerUserService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IResellerUserFilter): Observable<IPagedResult<IResellerUser>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IResellerUser>>(environment.api.urls.reseller_users.find, {params: pagedFilter});
  }

  private buildFilterParams(filter?: IResellerUserFilter): HttpParams {
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

  save(user: IResellerUser) {
    return this.http.post(environment.api.urls.reseller_users.create, user);
  }

  persist(user: IResellerUser) {
    return this.http.post(environment.api.urls.reseller_users.persist(user.id), user);
  }

  get(userId: number): Observable<IResellerUser> {
    return this.http.get<IResellerUser>(environment.api.urls.reseller_users.get(userId));
  }

  export() {
    return this.http.get(environment.api.urls.reseller_users.export,  { responseType: 'blob' });
  }
}
