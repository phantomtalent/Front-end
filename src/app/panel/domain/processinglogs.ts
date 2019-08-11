export class ProcessingLogs {
  constructor(
    public id: string,
    public name: string,
    public status: string,
    public type: string,
    public created_at: Date
  ) {}
}
