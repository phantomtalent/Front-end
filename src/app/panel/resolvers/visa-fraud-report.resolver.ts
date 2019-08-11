import {IVisaFraudReport} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {VisaFraudReportService} from '@app/panel/service/visafraudreport.service';

@Injectable()
export class VisaFraudReportResolver implements Resolve<IVisaFraudReport> {
  constructor(private _transactionService: VisaFraudReportService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IVisaFraudReport> {
    return this._transactionService.get(route.params.id);
  }
}
