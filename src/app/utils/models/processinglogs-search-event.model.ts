import {IProcessingLogsFilter, IProcessingLogsSearchEvent} from '@utils/interfaces';
import {ProcessingLogsFilter} from '@utils/models/processinglogs-filter.model';

export class ProcessingLogsSearchEvent implements IProcessingLogsSearchEvent {
  filter = new ProcessingLogsFilter();
  page = null;
  size = null;

  constructor(c?: IProcessingLogsSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new ProcessingLogsFilter(c.filter);
      }
    }
  }
}
