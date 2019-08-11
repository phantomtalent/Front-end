import {IMastercardFraudReport} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MastercardFraudReportService} from '@app/panel/service/mastercardfraudreport.service';

@Injectable()
export class MastercardFraudReportResolver implements Resolve<IMastercardFraudReport> {
  constructor(private _transactionService: MastercardFraudReportService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IMastercardFraudReport> {
    return this._transactionService.get(route.params.id);
  }
}
