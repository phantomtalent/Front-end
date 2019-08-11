import {INotification} from '@utils/interfaces';

export class Notification implements INotification {
  id = null;
  unique_id = null;
  type = null;
  status = null;
  retry = null;
  notifyable_id = null;
  notifyable_type = null;
  response = null;
  http_code = null;
  created_at = null;
  updated_at = null;

  constructor(c?: INotification) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.created_at = c.created_at ? c.created_at : null;
      this.unique_id = c.unique_id ? c.unique_id : null;
      this.type = c.type ? c.type : null;
      this.status = c.status ? c.status : null;
    }
  }
}
