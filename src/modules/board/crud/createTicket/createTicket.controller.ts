import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { createTicketService } from "./createTicket.service";
import { CreateTicket } from "./createTicket.types";

export const createTicket: ExpressMiddleware<unknown, CreateTicket> = async (
  req,
  res
) => {
  const data = await createTicketService(req.body);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
