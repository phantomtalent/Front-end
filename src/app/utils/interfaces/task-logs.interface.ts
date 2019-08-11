export interface ITaskLogs {
  id: number;
  status: string;
  task_name: string;
  info: string;
  log: string;
  created_at: Date;
  updated_at: Date;
}
