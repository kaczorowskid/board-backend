export interface Ticket {
  id: string;
  // code: string;
  title: string;
  description: string;
  // epics?: string[];
  prio: string;
  start: string;
  end: string;
  order: number;
  // comments: number;
  // comentatorsAvatars?: { name: string; avatar: string }[];
  column_id: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}
