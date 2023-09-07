import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Board, Column, Ticket } from "../../types";

export const ticketHasBeenCreated = (data: Ticket): DataResponse<Ticket> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});
