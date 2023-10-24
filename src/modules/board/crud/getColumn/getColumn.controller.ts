import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getColumnService } from "./getColumn.service";
import { GetColumnRequest } from "../../../../contracts/board/board.type";

export const getColumn: ExpressMiddleware<GetColumnRequest> = async (
  req,
  res
) => {
  try {
    const { get } = await getColumnService(req.params);

    const result = await get();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
