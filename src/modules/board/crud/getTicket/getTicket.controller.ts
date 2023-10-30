import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getTicketService } from "./getTicket.service";
import { GetTicketRequest } from "../../../../contracts/board/board.type";
import { getTicketRequestSchema } from "../../../../contracts/board/board.schema";

export const getTicket: ExpressMiddleware<GetTicketRequest> = async (
  req,
  res
) => {
  try {
    const request = getTicketRequestSchema.parse(req.params);
    const { get } = await getTicketService(request);

    const result = await get();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
