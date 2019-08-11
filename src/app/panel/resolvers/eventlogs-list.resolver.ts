import {IEventLogs} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {EventLogsService} from '@app/panel/service/eventlogs.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class EventLogsListResolver implements Resolve<IPagedResult<IEventLogs>> {
  constructor(private _taskLogsService: EventLogsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IEventLogs>> {
    return this._taskLogsService.search();
  }
}
