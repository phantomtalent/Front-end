import {ITransactionNotes} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TransactionNotesService} from '@app/panel/service/transaction_notes.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class TransactionNotesListResolver implements Resolve<IPagedResult<ITransactionNotes>> {
  constructor(private _transactionNotesService: TransactionNotesService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<ITransactionNotes>> {
    return this._transactionNotesService.search();
  }
}
