import {IUser} from '@utils/interfaces';

export class User implements IUser {
  created_at = null;
  email = null;
  enabled = null;
  first_name = null;
  id = null;
  last_activity_at = null;
  last_name = null;
  login = null;
  role = null;

  constructor(c?: IUser) {
    if (c) {
      this.created_at = c.created_at ? c.created_at : null;
      this.email = c.email ? c.email : null;
      this.enabled = c.enabled ? c.enabled : null;
      this.first_name = c.first_name ? c.first_name : null;
      this.id = c.id ? c.id : null;
      this.last_activity_at = c.last_activity_at ? c.last_activity_at : null;
      this.last_name = c.last_name ? c.last_name : null;
      this.login = c.login ? c.login : null;
      this.role = c.role ? c.role : null;
    }
  }

}
