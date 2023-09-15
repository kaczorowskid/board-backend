import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getTicketService } from "./getTicket.service";
import { GetTicketParams } from "./getTicket.types";

export const getTicket: ExpressMiddleware<GetTicketParams> = async (
  req,
  res
) => {
  const data = await getTicketService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
