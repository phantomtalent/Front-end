import {ITaskLogsFilter, ITaskLogsSearchEvent} from '@utils/interfaces';
import {TaskLogsFilter} from '@utils/models/task-logs-filter.model';

export class TaskLogsSearchEvent implements ITaskLogsSearchEvent {
  filter = new TaskLogsFilter();
  page = null;
  size = null;

  constructor(c?: ITaskLogsSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new TaskLogsFilter(c.filter);
      }
    }
  }
}
