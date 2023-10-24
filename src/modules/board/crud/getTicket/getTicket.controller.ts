import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getTicketService } from "./getTicket.service";
import { GetTicketRequest } from "../../../../contracts/board/board.type";

export const getTicket: ExpressMiddleware<GetTicketRequest> = async (
  req,
  res
) => {
  try {
    const { get } = await getTicketService(req.params);

    const result = await get();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
