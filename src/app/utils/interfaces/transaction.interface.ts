export interface ITransaction {
  id: number;
  status: string;
  created_at: Date;
  merchant_id: number;
  merchant_name: string;
  terminal_id: number;
  terminal_name: string;
  contract_id: number;
  contract_name: string;
  type: string;
  error_class: string;
  error_message: string;
  merchant_transaction_id: string;
  unique_id: string;
  amount: number;
  currency: string;
  external_id: string;
}
