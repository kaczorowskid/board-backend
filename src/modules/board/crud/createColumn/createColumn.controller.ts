import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { createColumnService } from "./createColumn.service";
import { CreateColumn } from "./createColumn.types";

export const createColumn: ExpressMiddleware<unknown, CreateColumn> = async (
  req,
  res
) => {
  const data = await createColumnService(req.body);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
