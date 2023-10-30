import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getColumnService } from "./getColumn.service";
import { GetColumnRequest } from "../../../../contracts/board/board.type";
import { getColumnRequestSchema } from "../../../../contracts/board/board.schema";

export const getColumn: ExpressMiddleware<GetColumnRequest> = async (
  req,
  res
) => {
  try {
    const request = getColumnRequestSchema.parse(req.params);
    const { get } = await getColumnService(request);

    const result = await get();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
