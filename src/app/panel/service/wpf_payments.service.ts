import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { IPagedResult } from '../common/paged-result';
import { HttpUtils } from '../common/http-utils';
import { DateUtil } from '../common/date-util';
import {
  IPagination,
  IWpfPayments,
  ITransaction,
  IWpfPaymentsFilter,
  IWpfAddresses,
  INotification
} from '@utils/interfaces';
import { Pagination } from '@utils/models';

@Injectable({
  providedIn: 'root'
})
export class WpfPaymentsService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IWpfPaymentsFilter): Observable<IPagedResult<IWpfPayments>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IWpfPayments>>(environment.api.urls.wpf_payments.base, { params: pagedFilter });
  }

  private buildFilterParams(filter?: IWpfPaymentsFilter): HttpParams {
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

  save(wpfPayment: IWpfPayments) {
    return this.http.post(environment.api.urls.wpf_payments.base, wpfPayment);
  }

  persist(wpfPayment: IWpfPayments) {
    return this.http.post(environment.api.urls.wpf_payments.persist(wpfPayment.id), wpfPayment);
  }

  get(wpfPaymentId: number): Observable<IWpfPayments> {
    return this.http.get<IWpfPayments>(environment.api.urls.wpf_payments.get(wpfPaymentId));
  }

  getWpfPaymentNotification(transactionId: number): Observable<INotification> {
    return this.http.get<INotification>(environment.api.urls.wpf_payments.getWpfPaymentNotification(transactionId));
  }

  getTransactions(wpfPaymentId: number): Observable<IWpfPayments[]> {
    return this.http.get<IWpfPayments[]>(environment.api.urls.wpf_payments.transactions(wpfPaymentId));
  }

  getReferenceTransactions(wpfPaymentId: number): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(environment.api.urls.wpf_payments.referenceTransactions(wpfPaymentId));
  }

  getBillingAddress(transactionId: number): Observable<IWpfAddresses> {
    return this.http.get<IWpfAddresses>(environment.api.urls.transactions.getBillingAddress(transactionId));
  }

  getShippingAddress(transactionId: number): Observable<IWpfAddresses> {
    return this.http.get<IWpfAddresses>(environment.api.urls.transactions.getShippingAddress(transactionId));
  }

  export() {
    return this.http.get(environment.api.urls.wpf_payments.export, { responseType: 'blob' });
  }
}
