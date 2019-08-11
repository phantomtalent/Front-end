import {IReseller} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ResellerService} from '@app/panel/service/reseller.service';

@Injectable()
export class ResellerResolver implements Resolve<IReseller> {
  constructor(private _resellerService: ResellerService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IReseller> {
    return this._resellerService.get(route.params.id);
  }
}
