import {ITaskLogs} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TaskLogsService} from '@app/panel/service/tasklogs.service';

@Injectable()
export class TaskLogsResolver implements Resolve<ITaskLogs> {
  constructor(private _taskLogsService: TaskLogsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ITaskLogs> {
    return this._taskLogsService.get(route.params.id);
  }
}
