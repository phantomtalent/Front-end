import {ITransaction} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TransactionService} from '@app/panel/service/transaction.service';

@Injectable()
export class TransactionResolver implements Resolve<ITransaction> {
  constructor(private _transactionService: TransactionService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ITransaction> {
    return this._transactionService.get(route.params.id);
  }
}
