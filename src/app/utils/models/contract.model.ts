import {IContract} from '@utils/interfaces';

export class Contract implements IContract {
  id = null;
  enabled = null;
  name = null;
  login = null;
  pwd = null;
  merchant_number = null;
  gateway = null;
  reseller_id = null;
  reseller_name = null;
  acquirer_id = null;
  acquirer_name = null;
  terminal_id = null;
  terminal_name = null;
  merchant_id = null;
  merchant_name = null;
  mpi_timeout_seconds = null;
  expires_at = null;
  terminal_token = null;
  credential1 = null;
  credential2 = null;
  descriptor = null;
  merchant_city = null;
  merchant_country_code = null;
  refund_timeframe = null;
  authorize_timeframe = null;
  merchant_category_code = null;
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
  currencies = null;
  card_brands = null;
  mpi = null;
  mpi_mode = null;
  bank_account_number = null;
  created_at = null;
  refund_email = null;
  timeout_seconds = null;
  merchant_bank_id = null;
  merchant_password = null;
  merchant_url = null;
  merchant_certificate_password = null;
  merchant_certificate_subject = null;
  directory_server = null;
  contract_owner_id = null;
  contract_owner_type = null;
  enrollment_status = null;
  authentication_status = null;
  authentication_service = null;
  is_template = null;
  template_id = null;

  constructor(c?: IContract) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.enabled = c.enabled ? c.enabled : null;
      this.name = c.name ? c.name : null;
      this.gateway = c.gateway ? c.gateway : null;
      this.reseller_id = c.reseller_id ? c.reseller_id : null;
      this.reseller_name = c.reseller_name ? c.reseller_name : null;
      this.acquirer_id = c.acquirer_id ? c.acquirer_id : null;
      this.acquirer_name = c.acquirer_name ? c.acquirer_name : null;
      this.terminal_id = c.terminal_id ? c.terminal_id : null;
      this.terminal_name = c.terminal_name ? c.terminal_name : null;
      this.merchant_id = c.merchant_id ? c.merchant_id : null;
      this.merchant_name = c.merchant_name ? c.merchant_name : null;
      this.descriptor = c.descriptor ? c.descriptor : null;
      this.currencies = c.currencies ? c.currencies : null;
      this.card_brands = c.card_brands ? c.card_brands : null;
    }
  }
}
