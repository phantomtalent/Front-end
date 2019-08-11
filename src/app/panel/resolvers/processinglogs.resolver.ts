import {IProcessingLogs} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProcessingLogsService} from '@app/panel/service/processinglogs.service';

@Injectable()
export class ProcessingLogsResolver implements Resolve<IProcessingLogs> {
  constructor(private _processinglogsService: ProcessingLogsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IProcessingLogs> {
    return this._processinglogsService.get(route.params.id);
  }
}
