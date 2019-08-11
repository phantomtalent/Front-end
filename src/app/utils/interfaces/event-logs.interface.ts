export interface IEventLogs {
  id: number;
  title: string;
  message: string;
  event_type: string;
  entity_class: string;
  entity_id: number;
  created_at: Date;
  updated_at: Date;
}
