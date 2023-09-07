import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { removeColumnService } from "./removeColumn.service";
import { RemoveColumnParams } from "./removeColumn.types";

export const removeColumn: ExpressMiddleware<RemoveColumnParams> = async (
  req,
  res
) => {
  const data = await removeColumnService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
