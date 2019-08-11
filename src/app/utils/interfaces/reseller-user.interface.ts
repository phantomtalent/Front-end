export interface IResellerUser {
  id: number;
  login: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  owner_id: number;
  enabled: string;
  last_activity_at: Date;
  created_at: Date;
}
