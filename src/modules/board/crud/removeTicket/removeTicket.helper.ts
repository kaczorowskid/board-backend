import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { RemoveTicketEnum } from "./removeTicket.enum";

export const removedTicketSuccessfully = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.OK),
  data: RemoveTicketEnum.TICKET_REMOVED_SUCCESSFULLY,
});

export const ticketDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: RemoveTicketEnum.TICKET_DOES_NOT_EXIST,
});
