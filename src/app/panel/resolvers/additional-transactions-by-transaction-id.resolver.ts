import {ITransaction} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TransactionService} from '../service/transaction.service';

@Injectable()
export class AdditionalTransactionsByTransactionIdResolver implements Resolve<ITransaction[]> {
  constructor(private _transactionService: TransactionService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ITransaction[]> {
    return this._transactionService.additionalTransactions(route.params.id);
  }
}
