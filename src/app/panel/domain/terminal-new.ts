export class TerminalNew {
  constructor(
    public id: string,
    public enabled: string,
    public name: string,
    public merchant_id: string,
    public currency: string,
    public traffic_shaper_class: string,
    public mode: number,
    public descriptor_type: string,
    public expires_at: Date
  ) {}
}
