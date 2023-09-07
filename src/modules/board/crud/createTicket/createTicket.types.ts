export interface CreateTicket {
  id?: string;
  title: string;
  description: string;
  start: string;
  end: string;
  prio: string;
  order: number;
  column_id: string;
}
