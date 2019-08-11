import {IApiAttempt} from '@utils/interfaces';

export class ApiAttempt implements IApiAttempt {
  id = null;
  created_at = null;
  merchant_id = null;
  merchant_name = null;
  terminal_id = null;
  terminal_name = null;
  raw_request = null;
  raw_response = null;
  error_message = null;
  remote_ip = null;

  constructor(c?: IApiAttempt) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.created_at = c.created_at ? c.created_at : null;
      this.merchant_id = c.merchant_id ? c.merchant_id : null;
      this.merchant_name = c.merchant_name ? c.merchant_name : null;
      this.terminal_id = c.terminal_id ? c.terminal_id : null;
      this.terminal_name = c.terminal_name ? c.terminal_name : null;
      this.error_message = c.error_message ? c.error_message : null;
      this.remote_ip = c.remote_ip ? c.remote_ip : null;
    }
  }
}
