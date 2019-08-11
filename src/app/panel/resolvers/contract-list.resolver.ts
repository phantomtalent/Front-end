import {IContract} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ContractService} from '@app/panel/service/contract.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class ContractListResolver implements Resolve<IPagedResult<IContract>> {
  constructor(private _contractService: ContractService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IContract>> {
    return this._contractService.search();
  }
}
