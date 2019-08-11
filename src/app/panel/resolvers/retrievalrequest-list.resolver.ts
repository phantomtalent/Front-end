import {IRetrievalRequest} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RetrievalRequestService} from '@app/panel/service/retrievalrequest.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class RetrievalRequestListResolver implements Resolve<IPagedResult<IRetrievalRequest>> {
  constructor(private _retrievalrequestService: RetrievalRequestService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IRetrievalRequest>> {
    return this._retrievalrequestService.search();
  }
}
