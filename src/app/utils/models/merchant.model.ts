import {IMerchant} from '@utils/interfaces';

export class Merchant implements IMerchant {
  id = null;
  name = null;
  state_raw = null;
  merchant_users = null;
  login = null;
  pwd = null;
  street_address = null;
  zip_code = null;
  address_state = null;
  allowed_ip_address = null;
  allowed_domains = null;
  supports_api = null;
  companies = null;

  constructor(c?: IMerchant) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.name = c.name ? c.name : null;
      this.state_raw = c.state_raw ? c.state_raw : null;
      this.merchant_users = c.merchant_users ? c.merchant_users : null;
      this.companies = c.companies ? c.companies : null;
    }
  }
}
