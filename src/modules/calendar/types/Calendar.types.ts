export interface Calendar {
  id: string;
  start_date: string;
  hour: string;
  note: string;
  user_id: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}
