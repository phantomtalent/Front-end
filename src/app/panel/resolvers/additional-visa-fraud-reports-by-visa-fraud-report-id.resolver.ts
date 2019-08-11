import {IVisaFraudReport} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {VisaFraudReportService} from '../service/visafraudreport.service';

@Injectable()
export class AdditionalVisaFraudReportsByVisaFraudReportIdResolver implements Resolve<IVisaFraudReport[]> {
  constructor(private _processedtransactionService: VisaFraudReportService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IVisaFraudReport[]> {
    return this._processedtransactionService.additionalVisafraudreports(route.params.id);
  }
}
