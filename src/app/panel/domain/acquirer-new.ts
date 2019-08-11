export class AcquirerNew {
  constructor(
    public id: string,
    public name: string,
    public merchant_id: number,
    public status: string,
    public type: string,
    public created_at: Date
  ) {}
}
