import {IReseller} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ResellerService} from '@app/panel/service/reseller.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class ResellerListResolver implements Resolve<IPagedResult<IReseller>> {
  constructor(private _resellerService: ResellerService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IReseller>> {
    return this._resellerService.search();
  }
}
