import {IWpfPayments} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {WpfPaymentsService} from '@app/panel/service/wpf_payments.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class WpfPaymentsListResolver implements Resolve<IPagedResult<IWpfPayments>> {
  constructor(private _wpf_paymentsService: WpfPaymentsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IWpfPayments>> {
    return this._wpf_paymentsService.search();
  }
}
