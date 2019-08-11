export class MerchantNew {
  constructor(
    public id: string,
    public name: string,
    public login: string,
    public pwd: string,
    public state_raw: number,
    public street_address: string,
    public zip_code: string,
    public address_state: string,
    public allowed_ip_address: string,
    public allowed_domains: string,
  ) {}
}
