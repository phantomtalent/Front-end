import {IApiAttempt} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiAttemptService} from '@app/panel/service/apiattempt.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class ApiAttemptListResolver implements Resolve<IPagedResult<IApiAttempt>> {
  constructor(private _apiAttemptService: ApiAttemptService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IApiAttempt>> {
    return this._apiAttemptService.search();
  }
}
