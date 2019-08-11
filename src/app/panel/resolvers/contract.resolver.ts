import {IContract} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ContractService} from '@app/panel/service/contract.service';

@Injectable()
export class ContractResolver implements Resolve<IContract> {
  constructor(private _contractService: ContractService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IContract> {
    return this._contractService.get(route.params.id);
  }
}
