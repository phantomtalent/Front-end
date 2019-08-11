import {IMastercardFraudReport} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MastercardFraudReportService} from '@app/panel/service/mastercardfraudreport.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class MastercardFraudReportListResolver implements Resolve<IPagedResult<IMastercardFraudReport>> {
  constructor(private _transactionService: MastercardFraudReportService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IMastercardFraudReport>> {
    return this._transactionService.search();
  }
}
