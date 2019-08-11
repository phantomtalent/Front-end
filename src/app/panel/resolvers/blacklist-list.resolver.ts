import {IBlacklist} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BlacklistService} from '@app/panel/service/blacklist.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class BlacklistListResolver implements Resolve<IPagedResult<IBlacklist>> {
  constructor(private _blacklistService: BlacklistService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IBlacklist>> {
    return this._blacklistService.search();
  }
}
