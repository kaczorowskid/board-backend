import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { removeTicketService } from "./removeTicket.service";
import { RemoveTicketParams } from "./removeTicket.types";

export const removeTicket: ExpressMiddleware<RemoveTicketParams> = async (
  req,
  res
) => {
  const data = await removeTicketService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
