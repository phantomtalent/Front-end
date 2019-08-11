import {IEventLogs} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {EventLogsService} from '@app/panel/service/eventlogs.service';

@Injectable()
export class EventLogsResolver implements Resolve<IEventLogs> {
  constructor(private _taskLogsService: EventLogsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IEventLogs> {
    return this._taskLogsService.get(route.params.id);
  }
}
