import {IAddresses} from '@utils/interfaces';

export class Addresses implements IAddresses {
  id = null;
  payment_transaction_id = null;
  first_name = null;
  last_name = null;
  address1 = null;
  address2 = null;
  zip_code = null;
  city = null;
  state = null;
  country = null;
  type = null;
  created_at = null;
  updated_at = null;

  constructor(c?: IAddresses) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.payment_transaction_id = c.payment_transaction_id ? c.payment_transaction_id : null;
      this.first_name = c.first_name ? c.first_name : null;
      this.last_name = c.last_name ? c.last_name : null;
      this.address1 = c.address1 ? c.address1 : null;
      this.address2 = c.address2 ? c.address2 : null;
      this.zip_code = c.zip_code ? c.zip_code : null;
      this.city = c.city ? c.city : null;
      this.state = c.state ? c.state : null;
      this.country = c.country ? c.country : null;
      this.type = c.type ? c.type : null;
      this.created_at = c.created_at ? c.created_at : null;
      this.updated_at = c.updated_at ? c.updated_at : null;
    }
  }
}
