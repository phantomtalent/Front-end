import {IReseller} from '@utils/interfaces';

export class Reseller implements IReseller {
  id = null;
  name = null;
  domain = null;
  enabled = null;
  reseller_users = null;
  admin_id = null;

  constructor(c?: IReseller) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.name = c.name ? c.name : null;
      this.domain = c.domain ? c.domain : null;
      this.enabled = c.enabled ? c.enabled : null;
      this.reseller_users = c.reseller_users ? c.reseller_users : null;
      this.admin_id = c.admin_id ? c.admin_id : null;
    }
  }
}
