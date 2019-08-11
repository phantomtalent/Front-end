export class Notification {
  constructor(
    public id: string,
    public created_at: Date,
    public unique_id: String,
    public type: String,
    public status: String
  ) {}
}
