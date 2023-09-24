import { Board, Ticket } from "../../board";
import { Calendar } from "../../calendar";

export interface Dahsboard {
  recentBoards: {
    data: Board[];
    count: number;
  };
  recentTickets: {
    data: Ticket[];
    count: number;
  };
  calendar: Calendar[];
}
