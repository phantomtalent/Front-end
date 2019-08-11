import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { IPagedResult } from '../common/paged-result';
import { HttpUtils } from '../common/http-utils';
import { DateUtil } from '../common/date-util';
import {IPagination, IContract, IContractFilter, ICurrency, ICardBrands, ITerminalFilter} from '@utils/interfaces';
import { Pagination } from '@utils/models';
import { ContractGatewaysList } from '../domain/contract-gateways';
import { MpiGatewaysList } from '../domain/mpi-gateways';
import { ContractMccList } from '../domain/contract-mcc';
import { ContractRefundTimeframeList } from '../domain/contract-refund-timeframe';
import { ContractAuthorizeTimeframeList } from '../domain/contract-authorize-timeframe';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: IContractFilter): Observable<IPagedResult<IContract>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<IContract>>(environment.api.urls.contracts.find, { params: pagedFilter });
  }

  getTopContracts(filter: IContractFilter) {
    const params = this.buildFilterParams(filter);
    return this.http.get<any>(environment.api.urls.dashboard.topContracts, { params });
  }

  getContractGatewaysList(): Observable<Array<ContractGatewaysList>> {
    return this.http.get<Array<ContractGatewaysList>>(environment.api.urls.contracts.getContractGateways);
  }

  getMpiGatewaysList(): Observable<Array<MpiGatewaysList>> {
    return this.http.get<Array<MpiGatewaysList>>(environment.api.urls.contracts.getMpiGateways);
  }

  getContractMccsList(): Observable<Array<ContractMccList>> {
    return this.http.get<Array<ContractMccList>>(environment.api.urls.contracts.getContractMcc);
  }

  getContractRefundTimeframeList(): Observable<Array<ContractRefundTimeframeList>> {
    return this.http.get<Array<ContractRefundTimeframeList>>(environment.api.urls.contracts.getContractRefundTimeframe);
  }

  getContractAuthorizeTimeframeList(): Observable<Array<ContractAuthorizeTimeframeList>> {
    return this.http.get<Array<ContractAuthorizeTimeframeList>>(environment.api.urls.contracts.getContractAuthorizeTimeframe);
  }

  private buildFilterParams(filter?: IContractFilter): HttpParams {
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

  save(contract: IContract) {
    return this.http.post(environment.api.urls.contracts.create, contract);
  }

  persist(contract: IContract) {
    return this.http.post(environment.api.urls.contracts.persist(contract.id), contract);
  }

  get(contractId: number): Observable<IContract> {
    return this.http.get<IContract>(environment.api.urls.contracts.get(contractId));
  }

  getCurrencies(contractId: number): Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>(environment.api.urls.contracts.getCurrencies(contractId));
  }

  addCurrency(currency: ICurrency): Observable<ICurrency> {
    return this.http.post<ICurrency>(environment.api.urls.contracts.addCurrency, currency);
  }

  removeCurrency(id: number): Observable<any> {
    return this.http.delete(environment.api.urls.contracts.removeCurrency(id));
  }

  getCardBrandsList(): Observable<ICardBrands[]> {
    return this.http.get<ICardBrands[]>(environment.api.urls.contracts.getCardBrandsList);
  }

  getCardBrands(cardBrandtId: number): Observable<ICardBrands[]> {
    return this.http.get<ICardBrands[]>(environment.api.urls.contracts.getCardBrands(cardBrandtId));
  }

  addCardBrands(cardBrand: ICardBrands): Observable<ICardBrands> {
    return this.http.post<ICardBrands>(environment.api.urls.contracts.addCardBrands, cardBrand);
  }

  removeCardBrands(id: number): Observable<any> {
    return this.http.delete(environment.api.urls.contracts.removeCardBrands(id));
  }

  export() {
    return this.http.get(environment.api.urls.contracts.export, { responseType: 'blob' });
  }
}
