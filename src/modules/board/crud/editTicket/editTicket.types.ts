import { EditTicketRequest } from "../../../../contracts/board/board.type";

export interface EditTicket
  extends Pick<EditTicketRequest, "title" | "description" | "prio"> {}

export interface EditTicketParams extends Pick<EditTicketRequest, "id"> {}
