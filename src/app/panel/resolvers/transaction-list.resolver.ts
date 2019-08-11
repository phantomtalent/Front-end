import {ITransaction} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TransactionService} from '@app/panel/service/transaction.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class TransactionListResolver implements Resolve<IPagedResult<ITransaction>> {
  constructor(private _transactionService: TransactionService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<ITransaction>> {
    return this._transactionService.search();
  }
}
