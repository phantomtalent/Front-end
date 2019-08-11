import {IProcessingLogs} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProcessingLogsService} from '@app/panel/service/processinglogs.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class ProcessingLogsListResolver implements Resolve<IPagedResult<IProcessingLogs>> {
  constructor(private _processingLogsService: ProcessingLogsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<IProcessingLogs>> {
    return this._processingLogsService.search();
  }
}
