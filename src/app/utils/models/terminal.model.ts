import {ITerminal} from '@utils/interfaces';

export class Terminal implements ITerminal {
  id = null;
  enabled = null;
  name = null;
  token = null;
  reseller_id = null;
  merchant_id = null;
  currency = null;
  traffic_shaper_class = null;
  mode = null;
  descriptor_type = null;
  expires_at = null;
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

  constructor(c?: ITerminal) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.enabled = c.enabled ? c.enabled : null;
      this.name = c.name ? c.name : null;
      this.merchant_id = c.merchant_id ? c.merchant_id : null;
      this.currency = c.currency ? c.currency : null;
      this.traffic_shaper_class = c.traffic_shaper_class ? c.traffic_shaper_class : null;
      this.mode = c.mode ? c.mode : null;
      this.expires_at = c.expires_at ? c.expires_at : null;
    }
  }
}
