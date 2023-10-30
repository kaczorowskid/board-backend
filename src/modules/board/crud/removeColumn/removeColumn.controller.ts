import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { removeColumnService } from "./removeColumn.service";
import { RemoveColumnRequest } from "../../../../contracts/board/board.type";
import { removeColumnRequestSchema } from "../../../../contracts/board/board.schema";

export const removeColumn: ExpressMiddleware<RemoveColumnRequest> = async (
  req,
  res
) => {
  try {
    const request = removeColumnRequestSchema.parse(req.params);
    const { remove } = await removeColumnService(request);

    const result = await remove();
    res
      .status(result ? HTTPStatus.OK : HTTPStatus.CONFLICT)
      .json({ deleted: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
