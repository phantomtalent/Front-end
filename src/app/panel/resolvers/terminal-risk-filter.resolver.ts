import {ITerminalRiskFilter} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TerminalRiskFiltersService} from '@app/panel/service/terminal-risk-filters.service';

@Injectable()
export class TerminalRiskFilterResolver implements Resolve<ITerminalRiskFilter> {
  constructor(private _terminalRiskFiltersService: TerminalRiskFiltersService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ITerminalRiskFilter> {
    return this._terminalRiskFiltersService.get(route.params.id);
  }
}
