import {IMerchantUser} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MerchantUserService} from '@app/panel/service/merchantuser.service';

@Injectable()
export class MerchantUserResolver implements Resolve<IMerchantUser> {
  constructor(private _userService: MerchantUserService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IMerchantUser> {
    return this._userService.get(route.params.id);
  }
}
