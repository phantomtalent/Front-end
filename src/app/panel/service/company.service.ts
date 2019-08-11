import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {IPagedResult} from '../common/paged-result';
import {HttpUtils} from '../common/http-utils';
import {DateUtil} from '../common/date-util';
import {IPagination, ICompany, ICompanyFilter} from '@utils/interfaces';
import {Pagination} from '@utils/models';
import {CompanyList} from '@app/panel/domain/company-list';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: ICompanyFilter): Observable<IPagedResult<ICompany>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<ICompany>>(environment.api.urls.companies.find, {params: pagedFilter});
  }

  getCompaniesList(): Observable<Array<CompanyList>> {
    return this.http.get<Array<CompanyList>>(environment.api.urls.companies.getCompanies);
  }

  private buildFilterParams(filter?: ICompanyFilter): HttpParams {
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

  save(company: ICompany) {
    return this.http.post(environment.api.urls.companies.create, company);
  }

  persist(company: ICompany) {
    return this.http.post(environment.api.urls.companies.persist(company.id), company);
  }

  get(companyId: number): Observable<ICompany> {
    return this.http.get<ICompany>(environment.api.urls.companies.get(companyId));
  }

  export() {
    return this.http.get(environment.api.urls.companies.export,  { responseType: 'blob' });
  }
}
