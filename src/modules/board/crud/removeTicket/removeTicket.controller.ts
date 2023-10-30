import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { removeTicketService } from "./removeTicket.service";
import { RemoveTicketRequest } from "../../../../contracts/board/board.type";
import { removeTicketRequestSchema } from "../../../../contracts/board/board.schema";

export const removeTicket: ExpressMiddleware<RemoveTicketRequest> = async (
  req,
  res
) => {
  try {
    const request = removeTicketRequestSchema.parse(req.params);
    const { remove } = await removeTicketService(request);

    const result = await remove();
    res
      .status(result ? HTTPStatus.OK : HTTPStatus.CONFLICT)
      .json({ deleted: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
