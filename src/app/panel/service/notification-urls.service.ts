import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INotificationUrls, INotificationUrlType } from '@utils/interfaces';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationUrlsService {

  constructor(private http: HttpClient) { }

  persist(notification: INotificationUrls) {
    return this.http.post(environment.api.urls.notificationUrls.persist(notification.id), notification);
  }

  create(notification: INotificationUrls) {
    return this.http.post(environment.api.urls.notificationUrls.create, notification);
  }

  get(notificationId: number): Observable<INotificationUrls> {
    return this.http.get<INotificationUrls>(environment.api.urls.notificationUrls.get(notificationId));
  }

  getList(merchantId: number): Observable<INotificationUrls[]> {
    return this.http.get<INotificationUrls[]>(environment.api.urls.notificationUrls.base(merchantId));
  }

  getNotificationTypesList(): Observable<INotificationUrlType[]> {
    return this.http.get<INotificationUrlType[]>(environment.api.urls.notificationUrls.notification_types);
  }

  delete(notificationId: number): Observable<boolean> {
    return this.http.delete<boolean>(environment.api.urls.notificationUrls.delete(notificationId));
  }

}
