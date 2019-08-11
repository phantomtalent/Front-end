export interface IWpfPayments {
  id: number;
  status: string;
  created_at: Date;
  merchant_id: number;
  merchant_name: string;
  terminal_id: number;
  terminal_name: string;
  contract_id: number;
  contract_name: string;
  error_class: string;
  merchant_transaction_id: string;
  unique_id: string;
  amount: string;
  currency: string;
}
