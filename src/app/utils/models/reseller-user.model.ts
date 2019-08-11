import {IResellerUser} from '@utils/interfaces';

export class ResellerUser implements IResellerUser {
  created_at = null;
  email = null;
  enabled = null;
  first_name = null;
  id = null;
  last_activity_at = null;
  last_name = null;
  login = null;
  role = null;
  owner_id = null;
  tnx_authorize = null;
  tnx_authorize3d = null;
  tnx_sale = null;
  tnx_sale3d = null;
  tnx_capture = null;
  tnx_refund = null;
  tnx_void = null;
  tnx_init_recurring_sale = null;
  tnx_init_recurring_sale3d = null;
  tnx_recurring_sale = null;
  tnx_account_verification = null;
  tnx_credit = null;

  constructor(c?: IResellerUser) {
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
      this.owner_id = c.owner_id ? c.owner_id : null;
    }
  }
}
