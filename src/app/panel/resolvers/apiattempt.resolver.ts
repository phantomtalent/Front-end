import {IApiAttempt} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiAttemptService} from '@app/panel/service/apiattempt.service';

@Injectable()
export class ApiAttemptResolver implements Resolve<IApiAttempt> {
  constructor(private _apiAttemptService: ApiAttemptService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IApiAttempt> {
    return this._apiAttemptService.get(route.params.id);
  }
}
