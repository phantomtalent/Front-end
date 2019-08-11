import {IBlacklist} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BlacklistService} from '@app/panel/service/blacklist.service';

@Injectable()
export class BlacklistResolver implements Resolve<IBlacklist> {
  constructor(private _blacklistService: BlacklistService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IBlacklist> {
    return this._blacklistService.get(route.params.id);
  }
}
