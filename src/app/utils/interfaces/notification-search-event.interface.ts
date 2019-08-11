import {INotificationFilter} from '@utils/interfaces/notification-filter.interface';

export interface INotificationSearchEvent {
  filter: INotificationFilter;
  page: number;
  size: number;
}
