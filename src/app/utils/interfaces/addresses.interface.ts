export interface IAddresses {
  id: number;
  payment_transaction_id: number;
  first_name: string;
  last_name: string;
  address1: string;
  address2: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
  type: string;
  created_at: Date;
  updated_at: Date;
}
