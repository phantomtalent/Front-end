export interface IBlacklist {
  id: number;
  blacklist_owner_id: number;
  name: string;
  value: string;
  masked_pan: string;
  comment: string;
  created_at: Date;
}
