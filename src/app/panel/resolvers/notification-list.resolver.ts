import {INotification} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {NotificationService} from '@app/panel/service/notification.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class NotificationListResolver implements Resolve<IPagedResult<INotification>> {
  constructor(private _notificationService: NotificationService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<INotification>> {
    return this._notificationService.search();
  }
}
