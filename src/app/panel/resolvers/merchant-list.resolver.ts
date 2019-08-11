import {IMerchant} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MerchantService} from '@app/panel/service/merchant.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class MerchantListResolver implements Resolve<IPagedResult<IMerchant>> {
  constructor(private _merchantService: MerchantService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IMerchant>> {
    return this._merchantService.search();
  }
}
