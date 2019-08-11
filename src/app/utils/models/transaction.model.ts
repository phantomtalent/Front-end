import {ITransaction} from '@utils/interfaces';

export class Transaction implements ITransaction {
  id = null;
  status = null;
  created_at = null;
  merchant_id = null;
  merchant_name = null;
  terminal_id = null;
  terminal_name = null;
  contract_id = null;
  contract_name = null;
  type = null;
  error_class = null;
  error_message = null;
  merchant_transaction_id = null;
  unique_id = null;
  amount = null;
  reference_transaction_id = null;
  currency = null;
  external_id = null;

  constructor(c?: ITransaction) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.status = c.status ? c.status : null;
      this.created_at = c.created_at ? c.created_at : null;
      this.merchant_id = c.merchant_id ? c.merchant_id : null;
      this.merchant_name = c.merchant_name ? c.merchant_name : null;
      this.terminal_id = c.terminal_id ? c.terminal_id : null;
      this.terminal_name = c.terminal_name ? c.terminal_name : null;
      this.contract_id = c.contract_id ? c.contract_id : null;
      this.contract_name = c.contract_name ? c.contract_name : null;
      this.type = c.type ? c.type : null;
      this.error_class = c.error_class ? c.error_class : null;
      this.error_message = c.error_message ? c.error_message : null;
      this.merchant_transaction_id = c.merchant_transaction_id ? c.merchant_transaction_id : null;
      this.unique_id = c.unique_id ? c.unique_id : null;
      this.amount = c.amount ? c.amount : null;
      this.currency = c.currency ? c.currency : null;
      this.external_id = c.external_id ? c.external_id : null;
    }
  }
}
