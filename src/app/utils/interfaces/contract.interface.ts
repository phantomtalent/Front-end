export interface IContract {
  id: number;
  enabled: boolean;
  name: string;
  gateway: string;
  reseller_id: number;
  reseller_name: string;
  acquirer_id: number;
  acquirer_name: string;
  terminal_id: number;
  terminal_name: string;
  merchant_id: number;
  merchant_name: string;
  descriptor: string;
  currencies: string;
  card_brands: string;
}
