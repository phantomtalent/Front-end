import {IProcessedTransaction} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProcessedTransactionService} from '@app/panel/service/processed-transaction.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class ProcessedTransactionListResolver implements Resolve<IPagedResult<IProcessedTransaction>> {
  constructor(private _processedTransactionService: ProcessedTransactionService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IProcessedTransaction>> {
    return this._processedTransactionService.search();
  }
}
