export interface EditTicket {
  title: string;
  description: string;
  prio: string;
  start: string;
  end: string;
  order: number;
}

export interface EditTicketParams {
  id: string;
}
