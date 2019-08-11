export class Reseller {
  constructor(
    public id: string,
    public enabled: string,
    public name: string,
    public merchant_id: string,
    public currency: string,
    public mode: string,
    public expires_at: Date 
  ) {}
}
