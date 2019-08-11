import {IChargeback} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ChargebackService} from '../service/chargeback.service';

@Injectable()
export class AdditionalChargebacksByChargebackIdResolver implements Resolve<IChargeback[]> {
  constructor(private _chargebackService: ChargebackService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IChargeback[]> {
    return this._chargebackService.additionalChargebacks(route.params.id);
  }
}
