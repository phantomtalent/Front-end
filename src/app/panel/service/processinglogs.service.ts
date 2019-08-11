import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { IPagedResult } from '../common/paged-result';
import { HttpUtils } from '../common/http-utils';
import { DateUtil } from '../common/date-util';
import { IPagination, IProcessingLogs, IProcessingLogsFilter } from '@utils/interfaces';
import { Pagination } from '@utils/models';
import { ProcessingLogsList } from '../domain/processinglogs-list';

@Injectable({
  providedIn: 'root'
})
export class ProcessingLogsService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IProcessingLogsFilter): Observable<IPagedResult<IProcessingLogs>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IProcessingLogs>>(environment.api.urls.processinglogs.base, { params: pagedFilter });
  }

  getProcessingLogsList(processingLogsId: string): Observable<Array<ProcessingLogsList>> {
    return this.http.get<Array<ProcessingLogsList>>(environment.api.urls.processinglogs.getProcessinglogs(processingLogsId));
  }

  getWpfPaymentlogsList(wpfPaymentlogsId: string): Observable<Array<ProcessingLogsList>> {
    return this.http.get<Array<ProcessingLogsList>>(environment.api.urls.processinglogs.getWpfPaymentlogs(wpfPaymentlogsId));
  }

  private buildFilterParams(filter?: IProcessingLogsFilter): HttpParams {
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

  save(processingLog: IProcessingLogs) {
    return this.http.post(environment.api.urls.processinglogs.base, processingLog);
  }

  persist(processingLog: IProcessingLogs) {
    return this.http.post(environment.api.urls.processinglogs.persist(processingLog.id), processingLog);
  }

  get(processingLogId: number): Observable<IProcessingLogs> {
    return this.http.get<IProcessingLogs>(environment.api.urls.processinglogs.get(processingLogId));
  }

  export() {
    return this.http.get(environment.api.urls.processinglogs.export, { responseType: 'blob' });
  }
}
