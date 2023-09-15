import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getColumnService } from "./getColumn.service";
import { GetColumnParams } from "./getColumn.types";

export const getColumn: ExpressMiddleware<GetColumnParams> = async (
  req,
  res
) => {
  const data = await getColumnService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
