import {IRetrievalRequest} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RetrievalRequestService} from '@app/panel/service/retrievalrequest.service';

@Injectable()
export class RetrievalRequestResolver implements Resolve<IRetrievalRequest> {
  constructor(private _retrievalrequestService: RetrievalRequestService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IRetrievalRequest> {
    return this._retrievalrequestService.get(route.params.id);
  }
}
