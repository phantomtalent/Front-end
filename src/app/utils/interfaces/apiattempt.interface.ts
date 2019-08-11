export interface IApiAttempt {
  id: number;
  created_at: Date;
  merchant_id: number;
  merchant_name: string;
  terminal_id: number;
  terminal_name: string;
  error_message: string;
  remote_ip: string;
}
