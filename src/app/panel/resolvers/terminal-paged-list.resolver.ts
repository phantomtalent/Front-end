import {ITerminal} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TerminalService} from '@app/panel/service/terminal.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class TerminalPagedListResolver implements Resolve<IPagedResult<ITerminal>> {
  constructor(private _terminalService: TerminalService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<ITerminal>> {
    return this._terminalService.search();
  }
}
