import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {IPagedResult} from '../common/paged-result';
import {HttpUtils} from '../common/http-utils';
import {DateUtil} from '../common/date-util';
import {IPagination, ITransactionNotes, ITransactionNotesFilter} from '@utils/interfaces';
import {Pagination} from '@utils/models';

@Injectable({
  providedIn: 'root'
})
export class TransactionNotesService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: ITransactionNotesFilter): Observable<IPagedResult<ITransactionNotes>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<ITransactionNotes>>(environment.api.urls.transaction_notes.base, {params: pagedFilter});
  }

  private buildFilterParams(filter?: ITransactionNotesFilter): HttpParams {
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

  save(transaction_notes: ITransactionNotes) {
    return this.http.post(environment.api.urls.transaction_notes.base, transaction_notes);
  }

  add(transaction_note: ITransactionNotes): Observable<ITransactionNotes> {
    return this.http.post<ITransactionNotes>(environment.api.urls.transaction_notes.save, transaction_note);
  }

  persist(transaction_notes: ITransactionNotes) {
    return this.http.post(environment.api.urls.transaction_notes.persist(transaction_notes.id), transaction_notes);
  }

  list(transactionId: number): Observable<ITransactionNotes[]> {
    return this.http.get<ITransactionNotes[]>(environment.api.urls.transaction_notes.list(transactionId));
  }

  get(transaction_notesId: number): Observable<ITransactionNotes> {
    return this.http.get<ITransactionNotes>(environment.api.urls.transaction_notes.get(transaction_notesId));
  }

  export() {
    return this.http.get(environment.api.urls.transaction_notes.export,  { responseType: 'blob' });
  }

  delete(id: number) {
    return this.http.delete(environment.api.urls.transaction_notes.delete(id));
  }
}
