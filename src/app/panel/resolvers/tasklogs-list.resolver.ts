import {ITaskLogs} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TaskLogsService} from '@app/panel/service/tasklogs.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class TaskLogsListResolver implements Resolve<IPagedResult<ITaskLogs>> {
  constructor(private _taskLogsService: TaskLogsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<ITaskLogs>> {
    return this._taskLogsService.search();
  }
}
