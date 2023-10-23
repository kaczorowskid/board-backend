import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { createTicketService } from "./createTicket.service";
import { CreateTicket } from "./createTicket.types";

export const createTicket: ExpressMiddleware<unknown, CreateTicket> = async (
  req,
  res
) => {
  try {
    const { create } = await createTicketService(req.body);

    const result = await create();

    res.status(HTTPStatus.OK).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
