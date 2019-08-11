import {IProcessedTransaction} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProcessedTransactionService} from '@app/panel/service/processed-transaction.service';

@Injectable()
export class ProcessedTransactionResolver implements Resolve<IProcessedTransaction> {
  constructor(private _processedtransactionService: ProcessedTransactionService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IProcessedTransaction> {
    return this._processedtransactionService.get(route.params.id);
  }
}
