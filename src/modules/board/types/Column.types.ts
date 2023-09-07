import { Ticket } from "./Ticket.types";

export interface Column {
  id: string;
  title: string;
  board_id: string;
  tickets?: Ticket[];
  readonly created_at: Date;
  readonly updated_at: Date;
}
