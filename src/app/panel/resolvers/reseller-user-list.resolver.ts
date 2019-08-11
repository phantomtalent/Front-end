import {IResellerUser} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ResellerUserService} from '@app/panel/service/reselleruser.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class ResellerUserListResolver implements Resolve<IPagedResult<IResellerUser>> {
  constructor(private _userService: ResellerUserService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IResellerUser>> {
    return this._userService.search();
  }
}
