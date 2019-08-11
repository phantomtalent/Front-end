import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {IPagedResult} from '../common/paged-result';
import {HttpUtils} from '../common/http-utils';
import {DateUtil} from '../common/date-util';
import {IResellerUser, IPagination, IReseller, IResellerFilter} from '@utils/interfaces';
import {Pagination} from '@utils/models';
import {ResellerList} from '../domain/reseller-list';

@Injectable({
  providedIn: 'root'
})
export class ResellerService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IResellerFilter): Observable<IPagedResult<IReseller>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IReseller>>(environment.api.urls.resellers.find, {params: pagedFilter});
  }

  getResellersList(): Observable<Array<ResellerList>> {
    return this.http.get<Array<ResellerList>>(environment.api.urls.resellers.getResellers);
  }

  private buildFilterParams(filter?: IResellerFilter): HttpParams {
    let params = new HttpParams();

    if (filter) {
      if (filter.name) {
        params = params.append('name', filter.name);
      }

      if (filter.login) {
        params = params.append('login', filter.login);
      }

      if (filter.id) {
        params = params.append('id', filter.id.toString());
      }
    }

    return params;
  }

  save(reseller: IReseller) {
    return this.http.post(environment.api.urls.resellers.create, reseller);
  }

  persist(reseller: IReseller) {
    return this.http.post(environment.api.urls.resellers.persist(reseller.id), reseller);
  }

  get(resellerId: number): Observable<IReseller> {
    return this.http.get<IReseller>(environment.api.urls.resellers.get(resellerId));
  }

  getResellerUsersList(): Observable<IResellerUser[]> {
    return this.http.get<IResellerUser[]>(environment.api.urls.resellers.getResellerUsersList);
  }

  getResellerUsers(merchantId: number): Observable<IResellerUser[]> {
    return this.http.get<IResellerUser[]>(environment.api.urls.resellers.getResellerUsers(merchantId));
  }

  addResellerUser(company: IResellerUser): Observable<IResellerUser> {
    return this.http.post<IResellerUser>(environment.api.urls.resellers.addResellerUser, company);
  }

  removeResellerUser(id: number): Observable<any> {
    return this.http.delete(environment.api.urls.resellers.removeResellerUser(id));
  }

  export() {
    return this.http.get(environment.api.urls.resellers.export,  { responseType: 'blob' });
  }
}
