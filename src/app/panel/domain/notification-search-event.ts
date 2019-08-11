import {NotificationFilter} from "./notification-filter";

export class NotificationSearchEvent {
  constructor(
    public filter: NotificationFilter,
    public page: number,
    public size: number
  ) {}
}
