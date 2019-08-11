import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {IPagedResult} from '../common/paged-result';
import {HttpUtils} from '../common/http-utils';
import {DateUtil} from '../common/date-util';
import {IPagination, INotification, INotificationFilter} from '@utils/interfaces';
import {Pagination} from '@utils/models';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) {
  }

  search(pagination?: IPagination, filter?: INotificationFilter): Observable<IPagedResult<INotification>> {
    const params = this.buildFilterParams(filter);
    if (!pagination) {
      pagination = new Pagination();
    }
    const pagedFilter = HttpUtils.appendPageParams(params, pagination.current, pagination.size);

    return this.http.get<IPagedResult<INotification>>(environment.api.urls.notifications.base, {params: pagedFilter});
  }

  private buildFilterParams(filter?: INotificationFilter): HttpParams {
    let params = new HttpParams();

    if (filter) {
      if (filter.name) {
        params = params.append('name', filter.name);
      }
      if (filter.id) {
        params = params.append('id', filter.id);
      }

      if (filter.from) {
        params = params.append('from', DateUtil.offsetDate(filter.from.toISOString()));
      }

      if (filter.to) {
        params = params.append('to', DateUtil.offsetDate(filter.to.toISOString()));
      }
    }

    return params;
  }

  save(notification: INotification) {
    return this.http.post(environment.api.urls.notifications.base, notification);
  }

  persist(notification: INotification) {
    return this.http.post(environment.api.urls.notifications.persist(notification.id), notification);
  }

  get(notificationId: number): Observable<INotification> {
    return this.http.get<INotification>(environment.api.urls.notifications.get(notificationId));
  }

  export() {
    return this.http.get(environment.api.urls.notifications.export,  { responseType: 'blob' });
  }
}
