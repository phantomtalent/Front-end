export interface ITransactionNotes {
  id?: number;
  payment_transaction_id?: number;
  created_at?: Date;
  category?: string;
  priority: string;
  transition?: string;
  message: string;
  merchant_id?: number;
  merchant_name?: string;
  type?: string;
  reviewed_by?: number;
}
