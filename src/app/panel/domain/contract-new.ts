export class ContractNew {
  constructor(
    public id: string,
    public name: string,
    public reseller_id: number,
    public acquirer_id: number,
    public merchant_id: number,    
    public gateway: string,
    public descriptor: string,
    public merchant_city: string,
    public merchant_country: number,
    public merchant_number: string,
    public login: string,
    public password: string,
    public credential1: string,
    public credential2: string,
    public terminal_token: string,
    public expires_at: Date,
    public mcc: number,
    public timeout_seconds: number,
    public enabled: boolean,
  ) {}
}
