import {ITransactionNotes} from '@utils/interfaces';

export class TransactionNotes implements ITransactionNotes {
  id = null;
  payment_transaction_id = null;
  created_at = null;
  category = null;
  priority = null;
  transition = null;
  message = null;
  merchant_id = null;
  merchant_name = null;
  type = null;
  reviewed_by = null;

  constructor(c?: ITransactionNotes) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.payment_transaction_id = c.payment_transaction_id ? c.payment_transaction_id : null;
      this.created_at = c.created_at ? c.created_at : null;
      this.category = c.category ? c.category : null;
      this.priority = c.priority ? c.priority : null;
      this.transition = c.transition ? c.transition : null;
      this.message = c.message ? c.message : null;
      this.merchant_id = c.merchant_id ? c.merchant_id : null;
      this.merchant_name = c.merchant_name ? c.merchant_name : null;
      this.type = c.type ? c.type : null;
      this.reviewed_by = c.reviewed_by ? c.reviewed_by : null;
    }
  }
}
