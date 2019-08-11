import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {ITerminalRiskFilter, ITerminalRiskFilterStringified} from '@utils/interfaces';
import {map} from 'rxjs/operators';
import {ITerminalRiskFilterSettings, TerminalRiskFilterType2SettingMapping} from '@app/panel/domain/terminal-risk-filter-settings';

@Injectable({
  providedIn: 'root'
})
export class TerminalRiskFiltersService {

  constructor(private http: HttpClient) {
  }

  save(terminalId: number, terminalRiskFilter: ITerminalRiskFilter) {
    return this.http.post(
      environment.api.urls.terminals_risk_filters.save(terminalId),
      this.convertFilterToServerObject(terminalRiskFilter)
    );
  }

  add(terminalRiskFilter: ITerminalRiskFilter): Observable<ITerminalRiskFilter> {
    return this.http.post<ITerminalRiskFilterStringified>(
      environment.api.urls.terminals_risk_filters.create,
      this.convertFilterToServerObject(terminalRiskFilter)
    ).pipe(map((filter: ITerminalRiskFilterStringified) => {
      return this.convertFromServerObject(filter);
    }));
  }

  list(terminalId: number): Observable<ITerminalRiskFilter[]> {
    return this.http.get<ITerminalRiskFilterStringified[]>(environment.api.urls.terminals_risk_filters.list(terminalId)).pipe(
      map((filters: ITerminalRiskFilterStringified[]) => {
        const objectFilters: ITerminalRiskFilter[] = [];
        filters.forEach(filter => {
          objectFilters.push(this.convertFromServerObject(filter));
        });
        return objectFilters;
      })
    );
  }

  get(terminalRiskFilterId: number): Observable<ITerminalRiskFilter> {
    return this.http.get<ITerminalRiskFilterStringified>(environment.api.urls.terminals_risk_filters.get(terminalRiskFilterId)).pipe(
      map((filter: ITerminalRiskFilterStringified) => {
        return this.convertFromServerObject(filter);
      })
    );
  }

  delete(id: number|number[]) {
    return this.http.delete(environment.api.urls.terminals_risk_filters.delete(id));
  }

  changeOrder(terminalId: number, terminalRiskFilters: ITerminalRiskFilter[]) {
    const positionsData = [];
    terminalRiskFilters.forEach(filter => {
      positionsData.push({
        id: filter.id,
        position: filter.position
      });
    });
    return this.http.post(environment.api.urls.terminals_risk_filters.changeOrder(terminalId), positionsData);
  }

  copyToTerminals(terminalRiskFilterId: number, terminalIds: number[]) {
    return this.http.post(environment.api.urls.terminals_risk_filters.copyToTerminals(terminalRiskFilterId), terminalIds);
  }

  private convertFilterToServerObject(filter: ITerminalRiskFilter): ITerminalRiskFilterStringified {
    const filterSettings = {};
    Object.keys(filter.filter_settings).forEach(key => {
      filterSettings[key] = filter.filter_settings[key].value;
    });
    return {
      ...filter,
      filter_settings: JSON.stringify(filterSettings)
    };
  }

  private convertFromServerObject(filterObject: ITerminalRiskFilterStringified): ITerminalRiskFilter {
    const parsedSettings = JSON.parse(filterObject.filter_settings);
    const filterSettings: ITerminalRiskFilterSettings = new TerminalRiskFilterType2SettingMapping[filterObject.filter_class.toString()];
    Object.keys(filterSettings).forEach(key => {
      filterSettings[key].value = parsedSettings[key];
    });
    return {...filterObject, filter_settings: filterSettings, selected: null};
  }
}
