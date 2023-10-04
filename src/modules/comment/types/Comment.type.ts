export interface Comment {
  id: string;
  text: string;
  ticket_id: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}
