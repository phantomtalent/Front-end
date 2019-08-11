import {ITerminal} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TerminalService} from '@app/panel/service/terminal.service';

@Injectable()
export class TerminalListResolver implements Resolve<ITerminal[]> {
  constructor(private _terminalService: TerminalService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ITerminal[]> {
    return this._terminalService.getTerminalsList();
  }
}
