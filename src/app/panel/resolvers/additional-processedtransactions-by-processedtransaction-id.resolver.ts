import {IProcessedTransaction} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProcessedTransactionService} from '../service/processed-transaction.service';

@Injectable()
export class AdditionalProcessedTransactionsByProcessedTransactionIdResolver implements Resolve<IProcessedTransaction[]> {
  constructor(private _processedtransactionService: ProcessedTransactionService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IProcessedTransaction[]> {
    return this._processedtransactionService.additionalProcessedTransactions(route.params.id);
  }
}
