import {INotificationFilter, INotificationSearchEvent} from '@utils/interfaces';
import {NotificationFilter} from '@utils/models/notification-filter.model';

export class NotificationSearchEvent implements INotificationSearchEvent {
  filter = new NotificationFilter();
  page = null;
  size = null;

  constructor(c?: INotificationSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new NotificationFilter(c.filter);
      }
    }
  }
}
