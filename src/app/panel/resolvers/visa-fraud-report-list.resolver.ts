import {IVisaFraudReport} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {VisaFraudReportService} from '@app/panel/service/visafraudreport.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class VisaFraudReportListResolver implements Resolve<IPagedResult<IVisaFraudReport>> {
  constructor(private _transactionService: VisaFraudReportService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IVisaFraudReport>> {
    return this._transactionService.search();
  }
}
