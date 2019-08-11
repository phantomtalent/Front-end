import {IMerchantUser} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MerchantUserService} from '@app/panel/service/merchantuser.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class MerchantUserListResolver implements Resolve<IPagedResult<IMerchantUser>> {
  constructor(private _userService: MerchantUserService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IMerchantUser>> {
    return this._userService.search();
  }
}
