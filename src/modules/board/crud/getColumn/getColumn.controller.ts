import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getColumnService } from "./getColumn.service";
import { GetColumnParams } from "./getColumn.types";

export const getColumn: ExpressMiddleware<GetColumnParams> = async (
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
