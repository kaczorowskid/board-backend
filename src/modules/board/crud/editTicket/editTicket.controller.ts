import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { editTicketService } from "./editTicket.service";
import { EditTicket, EditTicketParams } from "./editTicket.types";
import { editTicketRequestSchema } from "../../../../contracts/board/board.schema";

export const editTicket: ExpressMiddleware<
  EditTicketParams,
  EditTicket
> = async (req, res) => {
  try {
    const request = editTicketRequestSchema.parse({
      ...req.params,
      ...req.body,
    });
    const { edit } = await editTicketService(request);

    const result = await edit();

    res.status(HTTPStatus.OK).json({ edited: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
