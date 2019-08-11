import {IEventLogsFilter} from '@utils/interfaces/event-logs-filter.interface';

export interface IEventLogsSearchEvent {
  filter: IEventLogsFilter;
  page: number;
  size: number;
}
