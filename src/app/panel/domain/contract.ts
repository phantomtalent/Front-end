export class Contract {
  constructor(
    public id: string,
    public enabled: boolean,
    public name: string,
    public merchant_id: number,    
    public gateway: string,
    public descriptor: string
  ) {}
}
