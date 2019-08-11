import {IProcessingLogsFilter} from '@utils/interfaces/processinglogs-filter.interface';

export interface IProcessingLogsSearchEvent {
  filter: IProcessingLogsFilter;
  page: number;
  size: number;
}
