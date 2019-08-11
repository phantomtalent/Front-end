import {ITransactionNotes} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TransactionNotesService} from '@app/panel/service/transaction_notes.service';

@Injectable()
export class TransactionNotesResolver implements Resolve<ITransactionNotes> {
  constructor(private _transactionNotesService: TransactionNotesService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ITransactionNotes> {
    return this._transactionNotesService.get(route.params.id);
  }
}
