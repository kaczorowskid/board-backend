import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { EditTicketEnum } from "./editTicket.enum";

export const ticketHasBeenEdited = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data: EditTicketEnum.TICKET_HAS_BEEN_EDITED,
});
