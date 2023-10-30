import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { removeBoardService } from "./removeBoard.service";
import { RemoveBoardRequest } from "../../../../contracts/board/board.type";
import { removeBoardRequestSchema } from "../../../../contracts/board/board.schema";

export const removeBoard: ExpressMiddleware<RemoveBoardRequest> = async (
  req,
  res
) => {
  try {
    const request = removeBoardRequestSchema.parse(req.params);
    const { remove } = await removeBoardService(request);

    const result = await remove();
    res
      .status(result ? HTTPStatus.OK : HTTPStatus.CONFLICT)
      .json({ deleted: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
