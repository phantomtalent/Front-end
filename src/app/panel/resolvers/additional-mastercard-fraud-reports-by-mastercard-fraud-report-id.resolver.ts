import {IMastercardFraudReport} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MastercardFraudReportService} from '../service/mastercardfraudreport.service';

@Injectable()
export class AdditionalMastercardFraudReportsByMastercardFraudReportIdResolver implements Resolve<IMastercardFraudReport[]> {
  constructor(private _transactionService: MastercardFraudReportService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IMastercardFraudReport[]> {
    return this._transactionService.additionalMastercardfraudreport(route.params.id);
  }
}
