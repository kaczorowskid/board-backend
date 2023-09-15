import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Ticket } from "../../types";
import { GetTicketEnum } from "./getTicket.enum";

export const getTicketData = (data: Ticket): DataResponse<Ticket> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const ticketDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetTicketEnum.TICKET_DOES_NOT_EXIST,
});
