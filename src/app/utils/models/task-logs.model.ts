import {ITaskLogs} from '@utils/interfaces';

export class TaskLogs implements ITaskLogs {
  id = null;
  status = null;
  task_name = null;
  info = null;
  log = null;
  created_at = null;
  updated_at = null;

  constructor(c?: ITaskLogs) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.status = c.status ? c.status : null;
      this.task_name = c.task_name ? c.task_name : null;
      this.info = c.info ? c.info : null;
      this.log = c.log ? c.log : null;
      this.created_at = c.created_at ? c.created_at : null;
      this.updated_at = c.updated_at ? c.updated_at : null;
    }
  }
}
