import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { IPagedResult } from '../common/paged-result';
import { HttpUtils } from '../common/http-utils';
import { DateUtil } from '../common/date-util';
import { IPagination, IChargeback, IChargebackFilter } from '@utils/interfaces';
import { Pagination } from '@utils/models';
import {ChargebackTypesList} from '@app/panel/domain/chargeback-types-list';

@Injectable({
  providedIn: 'root'
})
export class ChargebackService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IChargebackFilter): Observable<IPagedResult<IChargeback>> {

    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IChargeback>>(environment.api.urls.chargebacks.base, { params: pagedFilter });
  }

  getChargebackTypesList(): Observable<Array<ChargebackTypesList>> {
    return this.http.get<Array<ChargebackTypesList>>(environment.api.urls.chargebacks.getChargebackTypesList);
  }

  private buildFilterParams(filter?: IChargebackFilter): HttpParams {
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

  save(chargeback: IChargeback) {
    return this.http.post(environment.api.urls.chargebacks.base, chargeback);
  }

  persist(chargeback: IChargeback) {
    return this.http.post(environment.api.urls.chargebacks.persist(chargeback.id), chargeback);
  }

  get(chargebackId: number): Observable<IChargeback> {
    return this.http.get<IChargeback>(environment.api.urls.chargebacks.get(chargebackId));
  }

  additionalChargebacks(chargebackId: number): Observable<IChargeback[]> {
    return this.http.get<IChargeback[]>(environment.api.urls.chargebacks.getReference_transaction_id(chargebackId));
  }

  export() {
    return this.http.get(environment.api.urls.chargebacks.export, { responseType: 'blob' });
  }
}
