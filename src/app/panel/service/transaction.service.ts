import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TransactionFilter } from '../domain/transaction-filter';
import { Observable, Subject } from 'rxjs';
import { environment } from '@env/environment';
import { Transaction } from '../domain/transaction';
import { IPagedResult } from '../common/paged-result';
import { HttpUtils } from '../common/http-utils';
import { DateUtil } from '../common/date-util';
import { IPagination, ITransaction, ITransactionFilter, INotification, IAddresses } from '@utils/interfaces';
import { Pagination } from '@utils/models';
import {TransactionStatusList} from '@app/panel/domain/transaction-status-list';
import {TransactionTypesList} from '@app/panel/domain/transaction-types-list';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private refresh = new Subject();
  refresh$ = this.refresh.asObservable();

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: ITransactionFilter): Observable<IPagedResult<ITransaction>> {

    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<ITransaction>>(environment.api.urls.transactions.base, { params: pagedFilter });
  }

  getTransactionStatusList(): Observable<Array<TransactionStatusList>> {
    return this.http.get<Array<TransactionStatusList>>(environment.api.urls.transactions.getTransactionStatusList);
  }

  getTransactionTypesList(): Observable<Array<TransactionTypesList>> {
    return this.http.get<Array<TransactionTypesList>>(environment.api.urls.transactions.getTransactionTypesList);
  }

  private buildFilterParams(filter?: ITransactionFilter): HttpParams {
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

  save(transaction: ITransaction) {
    return this.http.post(environment.api.urls.transactions.base, transaction);
  }

  persist(transaction: ITransaction) {
    return this.http.post(environment.api.urls.transactions.persist(transaction.id), transaction);
  }

  get(transactionId: number): Observable<ITransaction> {
    return this.http.get<ITransaction>(environment.api.urls.transactions.get(transactionId));
  }

  additionalTransactions(transactionId: number): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(environment.api.urls.transactions.getReference_transaction_id(transactionId));
  }

  getTransactionNotification(transactionId: number): Observable<INotification> {
    return this.http.get<INotification>(environment.api.urls.transactions.getTransactionNotification(transactionId));
  }

  reconcile(transactionId: number): Observable<Transaction[]> {
    let url = environment.api.urls.transactions.reconcile(transactionId);
    return this.http.get<Transaction[]>(url);
  }

  getBillingAddress(transactionId: number): Observable<IAddresses> {
    return this.http.get<IAddresses>(environment.api.urls.transactions.getBillingAddress(transactionId));
  }

  getShippingAddress(transactionId: number): Observable<IAddresses> {
    return this.http.get<IAddresses>(environment.api.urls.transactions.getShippingAddress(transactionId));
  }

  export() {
    return this.http.get(environment.api.urls.transactions.export, { responseType: 'blob' });
  }

  exportRows(query) {
    return this.http.get(`${environment.api.urls.transactions.export}/${query}`, { responseType: 'blob' });
  }

  publishRefresh() {
    this.refresh.next();
  }
}
