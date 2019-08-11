export interface IProcessingLogs {
  id: number;
  unique_id: string;
  title: string;
  message: string;
  merchant_ip: string;
  level: string;
  created_at: Date;
  updated_at: Date;
}
