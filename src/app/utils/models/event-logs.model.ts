import {IEventLogs} from '@utils/interfaces';

export class EventLogs implements IEventLogs {
  id = null;
  title = null;
  message = null;
  event_type = null;
  entity_class = null;
  entity_id = null;
  created_at = null;
  updated_at = null;

  constructor(c?: IEventLogs) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.title = c.title ? c.title : null;
      this.message = c.message ? c.message : null;
      this.event_type = c.event_type ? c.event_type : null;
      this.entity_class = c.entity_class ? c.entity_class : null;
      this.entity_id = c.entity_id ? c.entity_id : null;
      this.created_at = c.created_at ? c.created_at : null;
      this.updated_at = c.updated_at ? c.updated_at : null;
    }
  }
}
