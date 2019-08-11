import {IWpfPayments} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {WpfPaymentsService} from '@app/panel/service/wpf_payments.service';

@Injectable()
export class WpfPaymentsResolver implements Resolve<IWpfPayments> {
  constructor(private _wpf_paymentsService: WpfPaymentsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IWpfPayments> {
    return this._wpf_paymentsService.get(route.params.id);
  }
}
