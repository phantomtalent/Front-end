import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {IPagedResult} from '../common/paged-result';
import {HttpUtils} from '../common/http-utils';
import {DateUtil} from '../common/date-util';
import {IPagination, IMerchant, IMerchantFilter, IMerchantCompanies, ICompany, IMerchantUser} from '@utils/interfaces';
import {Pagination} from '@utils/models';
import {MerchantList} from '../domain/merchant-list';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IMerchantFilter): Observable<IPagedResult<IMerchant>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IMerchant>>(environment.api.urls.merchants.find, {params: pagedFilter});
  }

  getTopMerchants(filter: IMerchantFilter) {
    const params = this.buildFilterParams(filter);
    return this.http.get<any>(environment.api.urls.dashboard.topMerchants, { params });
  }

  getMerchantsList(): Observable<Array<MerchantList>> {
    return this.http.get<Array<MerchantList>>(environment.api.urls.merchants.getMerchants);
  }

  private buildFilterParams(filter?: IMerchantFilter): HttpParams {
    let params = new HttpParams();

    if (filter) {
      if (filter.name) {
        params = params.append('name', filter.name);
      }

      if (filter.login) {
        params = params.append('login', filter.login);
      }

      if (filter.allowed_ip_address) {
        params = params.append('allowed_ip_address', filter.allowed_ip_address);
      }

      if (filter.id) {
        params = params.append('id', filter.id.toString());
      }

      if (filter.from) {
        params = params.append('from', DateUtil.offsetDate(filter.from.toISOString()));
      }

      if (filter.to) {
        params = params.append('to', DateUtil.offsetDate(filter.to.toISOString()));
      }

      if (filter.start) {
        params = params.append('start_date', DateUtil.offsetDate(filter.start.toISOString()));
      }

      if (filter.end) {
        params = params.append('end_date', DateUtil.offsetDate(filter.end.toISOString()));
      }
    }

    return params;
  }

  save(merchant: IMerchant) {
    return this.http.post(environment.api.urls.merchants.create, merchant);
  }

  persist(merchant: IMerchant) {
    return this.http.post(environment.api.urls.merchants.persist(merchant.id), merchant);
  }

  get(merchantId: number): Observable<IMerchant> {
    return this.http.get<IMerchant>(environment.api.urls.merchants.get(merchantId));
  }

  getCompaniesList(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(environment.api.urls.merchants.getCompaniesList);
  }

  getCompanies(merchantId: number): Observable<IMerchantCompanies[]> {
    return this.http.get<IMerchantCompanies[]>(environment.api.urls.merchants.getCompanies(merchantId));
  }

  addCompany(company: IMerchantCompanies): Observable<IMerchantCompanies> {
    return this.http.post<IMerchantCompanies>(environment.api.urls.merchants.addCompany, company);
  }

  removeCompany(id: number): Observable<any> {
    return this.http.delete(environment.api.urls.merchants.removeCompany(id));
  }

  getMerchantUsersList(): Observable<IMerchantUser[]> {
    return this.http.get<IMerchantUser[]>(environment.api.urls.merchants.getMerchantUsersList);
  }

  getMerchantUsers(merchantId: number): Observable<IMerchantUser[]> {
    return this.http.get<IMerchantUser[]>(environment.api.urls.merchants.getMerchantUsers(merchantId));
  }

  addMerchantUser(company: IMerchantUser): Observable<IMerchantUser> {
    return this.http.post<IMerchantUser>(environment.api.urls.merchants.addMerchantUser, company);
  }

  removeMerchantUser(id: number): Observable<any> {
    return this.http.delete(environment.api.urls.merchants.removeMerchantUser(id));
  }

  export() {
    return this.http.get(environment.api.urls.merchants.export,  { responseType: 'blob' });
  }

  exportRows(query) {
    return this.http.get(`${environment.api.urls.merchants.export}/${query}`, { responseType: 'blob' });
  }
}
