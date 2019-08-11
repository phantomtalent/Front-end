import {IApiAttemptFilter, IApiAttemptSearchEvent, IApiAttempt} from '@utils/interfaces';
import {ApiAttemptFilter} from '@utils/models/apiattempt-filter.model';

export class ApiAttemptSearchEvent implements IApiAttemptSearchEvent {
  filter = new ApiAttemptFilter();
  page = null;
  size = null;

  constructor(c?: IApiAttemptSearchEvent) {
    if (c) {
      this.page = c.page ? c.page : null;
      this.size = c.size ? c.size : null;

      if (c.filter) {
        this.filter = new ApiAttemptFilter(c.filter);
      }
    }
  }
}
