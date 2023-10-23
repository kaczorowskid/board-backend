import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { removeBoardService } from "./removeBoard.service";
import { RemoveBoardParams } from "./removeBoard.types";

export const removeBoard: ExpressMiddleware<RemoveBoardParams> = async (
  req,
  res
) => {
  try {
    const { remove } = await removeBoardService(req.params);

    const result = await remove();
    res
      .status(result ? HTTPStatus.OK : HTTPStatus.CONFLICT)
      .json({ deleted: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
