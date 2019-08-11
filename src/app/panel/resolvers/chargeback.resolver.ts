import {IChargeback} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ChargebackService} from '@app/panel/service/chargeback.service';

@Injectable()
export class ChargebackResolver implements Resolve<IChargeback> {
  constructor(private _chargebackService: ChargebackService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IChargeback> {
    return this._chargebackService.get(route.params.id);
  }
}
