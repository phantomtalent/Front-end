import {IChargeback} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ChargebackService} from '@app/panel/service/chargeback.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class ChargebackListResolver implements Resolve<IPagedResult<IChargeback>> {
  constructor(private _chargebackService: ChargebackService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IChargeback>> {
    return this._chargebackService.search();
  }
}
