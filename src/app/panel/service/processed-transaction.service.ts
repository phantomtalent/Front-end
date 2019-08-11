import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProcessedTransactionFilter } from '../domain/processed-transaction-filter';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { ProcessedTransaction } from '../domain/processed-transaction';
import { IPagedResult } from '../common/paged-result';
import { HttpUtils } from '../common/http-utils';
import { DateUtil } from '../common/date-util';
import { IPagination, IProcessedTransaction, IProcessedTransactionFilter } from '@utils/interfaces';
import { Pagination } from '@utils/models';

@Injectable({
  providedIn: 'root'
})
export class ProcessedTransactionService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IProcessedTransactionFilter): Observable<IPagedResult<IProcessedTransaction>> {

    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IProcessedTransaction>>(environment.api.urls.processed_transactions.base, { params: pagedFilter });
  }

  private buildFilterParams(filter?: IProcessedTransactionFilter): HttpParams {
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

  save(transaction: IProcessedTransaction) {
    return this.http.post(environment.api.urls.processed_transactions.base, transaction);
  }

  persist(transaction: IProcessedTransaction) {
    return this.http.post(environment.api.urls.processed_transactions.persist(transaction.id), transaction);
  }

  get(transactionId: number): Observable<IProcessedTransaction> {
    return this.http.get<IProcessedTransaction>(environment.api.urls.processed_transactions.get(transactionId));
  }

  additionalProcessedTransactions(transactionId: number): Observable<IProcessedTransaction[]> {
    return this.http.get<IProcessedTransaction[]>(environment.api.urls.processed_transactions.getReference_transaction_id(transactionId));
  }

  export() {
    return this.http.get(environment.api.urls.processed_transactions.export, { responseType: 'blob' });
  }
}
