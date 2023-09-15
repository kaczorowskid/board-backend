import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { editTicketService } from "./editTicket.service";
import { EditTicket, EditTicketParams } from "./editTicket.types";

export const editTicket: ExpressMiddleware<
  EditTicketParams,
  EditTicket
> = async (req, res) => {
  const data = await editTicketService({ ...req.params, ...req.body });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
