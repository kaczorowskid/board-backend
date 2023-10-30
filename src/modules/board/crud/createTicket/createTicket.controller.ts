import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { createTicketService } from "./createTicket.service";
import { CreateTicketRequest } from "../../../../contracts/board/board.type";
import { createTicketRequestSchema } from "../../../../contracts/board/board.schema";

export const createTicket: ExpressMiddleware<
  unknown,
  CreateTicketRequest
> = async (req, res) => {
  try {
    const request = createTicketRequestSchema.parse(req.body);
    const { create } = await createTicketService(request);

    const result = await create();

    res.status(HTTPStatus.OK).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
