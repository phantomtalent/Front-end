import {IMerchant} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MerchantService} from '@app/panel/service/merchant.service';

@Injectable()
export class MerchantResolver implements Resolve<IMerchant> {
  constructor(private _merchantService: MerchantService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IMerchant> {
    return this._merchantService.get(route.params.id);
  }
}
