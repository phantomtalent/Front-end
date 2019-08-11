import {IAcquirer} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AcquirerService} from '@app/panel/service/acquirer.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class AcquirerListResolver implements Resolve<IPagedResult<IAcquirer>> {
  constructor(private _acquirerService: AcquirerService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IAcquirer>> {
    return this._acquirerService.search();
  }
}
