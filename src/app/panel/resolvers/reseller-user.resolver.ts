import {IResellerUser} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ResellerUserService} from '@app/panel/service/reselleruser.service';

@Injectable()
export class ResellerUserResolver implements Resolve<IResellerUser> {
  constructor(private _userService: ResellerUserService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IResellerUser> {
    return this._userService.get(route.params.id);
  }
}
