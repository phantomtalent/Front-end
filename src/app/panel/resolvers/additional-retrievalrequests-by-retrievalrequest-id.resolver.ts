import {IRetrievalRequest} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RetrievalRequestService} from '../service/retrievalrequest.service';

@Injectable()
export class AdditionalRetrievalRequestsByetrievalRequestIdResolver implements Resolve<IRetrievalRequest[]> {
  constructor(private _retrievalrequestService: RetrievalRequestService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IRetrievalRequest[]> {
    return this._retrievalrequestService.additionalRetrievalRequests(route.params.id);
  }
}
