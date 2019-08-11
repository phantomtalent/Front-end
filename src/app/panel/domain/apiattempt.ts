export class ApiAttempt {
  constructor(
    public id: string,
    public created_at: Date,
    public merchant: string,
    public terminal: string,
    public error_message: string,
    public remote_ip: String
  ) {}
}
