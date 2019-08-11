export interface INotificationUrls {
  id?: number;
  notification_url_owner_id: number;
  notification_url_owner_type: string;
  url: string;
  enabled: boolean;
  url_type: string;
  created_at?: Date;
  updated_at?: Date;
}
