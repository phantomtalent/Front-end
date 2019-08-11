export class Terminal {
  constructor(
    public id: string,
    public enabled: string,
    public name: string,
    public merchant_id: string,
    public currency: string,
    public mode: number,
    public expires_at: Date
  ) {}
}
