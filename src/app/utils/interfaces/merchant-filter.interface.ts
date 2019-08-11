export interface IMerchantFilter {
  id?: number;
  name?: string;
  login?: string;
  allowed_ip_address?: string;
  from?: Date;
  to?: Date;
  start?: Date;
  end?: Date;
}
