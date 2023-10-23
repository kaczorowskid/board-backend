import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { removeTicketService } from "./removeTicket.service";
import { RemoveTicketParams } from "./removeTicket.types";

export const removeTicket: ExpressMiddleware<RemoveTicketParams> = async (
  req,
  res
) => {
  try {
    const { remove } = await removeTicketService(req.params);

    const result = await remove();
    res
      .status(result ? HTTPStatus.OK : HTTPStatus.CONFLICT)
      .json({ deleted: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
