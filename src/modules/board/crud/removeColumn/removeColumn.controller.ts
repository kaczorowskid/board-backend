import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { removeColumnService } from "./removeColumn.service";
import { RemoveColumnParams } from "./removeColumn.types";

export const removeColumn: ExpressMiddleware<RemoveColumnParams> = async (
  req,
  res
) => {
  try {
    const { remove } = await removeColumnService(req.params);

    const result = await remove();
    res
      .status(result ? HTTPStatus.OK : HTTPStatus.CONFLICT)
      .json({ deleted: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
