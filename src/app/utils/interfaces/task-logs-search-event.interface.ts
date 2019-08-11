import {ITaskLogsFilter} from '@utils/interfaces/task-logs-filter.interface';

export interface ITaskLogsSearchEvent {
  filter: ITaskLogsFilter;
  page: number;
  size: number;
}
