import {IEventLogsFilter, IEventLogsSearchEvent} from '@utils/interfaces';
import {EventLogsFilter} from '@utils/models/event-logs-filter.model';

export class EventLogsSearchEvent implements IEventLogsSearchEvent {
  filter = new EventLogsFilter();
  page = null;
  size = null;

  constructor(c?: IEventLogsSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new EventLogsFilter(c.filter);
      }
    }
  }
}
