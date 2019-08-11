export interface ITerminal {
  id: number;
  enabled: string;
  name: string;
  merchant_id: string;
  currency: string;
  traffic_shaper_class: string;
  mode: number;
  expires_at?: Date;
}
