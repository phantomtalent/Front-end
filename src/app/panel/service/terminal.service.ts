import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { IPagedResult } from '../common/paged-result';
import { HttpUtils } from '../common/http-utils';
import { DateUtil } from '../common/date-util';
import {IContract, IPagination, ITerminal, ITerminalFilter, IContractsTerminals, ITransaction} from '@utils/interfaces';
import { Pagination } from '@utils/models';
import { CurrenciesList } from '@app/panel/domain/currencies-list';
import { TrafficShaperClassList } from '@app/panel/domain/traffic-shaper-class-list';
import { DescriptorTypeList } from '@app/panel/domain/descriptor-type-list';
import {ITransactionDeclinedReasons} from "@utils/interfaces/transaction-declined-reasons.interface";

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: ITerminalFilter): Observable<IPagedResult<ITerminal>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<ITerminal>>(environment.api.urls.terminals.find, { params: pagedFilter });
  }

  getTerminalsList(): Observable<Array<ITerminal>> {
    return this.http.get<Array<ITerminal>>(environment.api.urls.terminals.getTerminals);
  }

  getTopTerminals(filter: ITerminalFilter) {
    const params = this.buildFilterParams(filter);
    return this.http.get<any>(environment.api.urls.dashboard.topTerminals, { params });
  }

  getCurrenciesList(): Observable<Array<CurrenciesList>> {
    return this.http.get<Array<CurrenciesList>>(environment.api.urls.terminals.getCurrenciesList);
  }

  getTrafficShaperList(): Observable<Array<TrafficShaperClassList>> {
    return this.http.get<Array<TrafficShaperClassList>>(environment.api.urls.terminals.getTrafficShalperList);
  }

  getDescriptorTypeList(): Observable<Array<DescriptorTypeList>> {
    return this.http.get<Array<DescriptorTypeList>>(environment.api.urls.terminals.getDescriptorTypeList);
  }

  private buildFilterParams(filter?: ITerminalFilter): HttpParams {
    let params = new HttpParams();

    if (filter) {
      if (filter.name) {
        params = params.append('name', filter.name);
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

  save(terminal: ITerminal) {
    return this.http.post(environment.api.urls.terminals.create, terminal);
  }

  persist(terminal: ITerminal) {
    return this.http.post(environment.api.urls.terminals.persist(terminal.id), terminal);
  }

  get(terminalId: number): Observable<ITerminal> {
    return this.http.get<ITerminal>(environment.api.urls.terminals.get(terminalId));
  }

  getDeclineReasons(terminalId: number): Observable<ITransactionDeclinedReasons[]> {
    return this.http.get<ITransactionDeclinedReasons[]>(environment.api.urls.terminals.getTerminalDeclineReasonsList(terminalId));
  }

  getContractsList(): Observable<IContract[]> {
    return this.http.get<IContract[]>(environment.api.urls.terminals.getContractsList);
  }

  getContracts(terminalId: number): Observable<IContractsTerminals[]> {
    return this.http.get<IContractsTerminals[]>(environment.api.urls.terminals.getContracts(terminalId));
  }

  addContract(contract: IContractsTerminals): Observable<IContractsTerminals> {
    return this.http.post<IContractsTerminals>(environment.api.urls.terminals.addContract, contract);
  }

  removeContract(id: number): Observable<any> {
    return this.http.delete(environment.api.urls.terminals.removeContract(id));
  }

  export() {
    return this.http.get(environment.api.urls.terminals.export, { responseType: 'blob' });
  }

  exportRows(query) {
    return this.http.get(`${environment.api.urls.terminals.export}/${query}`, { responseType: 'blob' });
  }
}

