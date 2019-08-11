import {INotification} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {NotificationService} from '@app/panel/service/notification.service';

@Injectable()
export class NotificationResolver implements Resolve<INotification> {
  constructor(private _notificationService: NotificationService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<INotification> {
    return this._notificationService.get(route.params.id);
  }
}
