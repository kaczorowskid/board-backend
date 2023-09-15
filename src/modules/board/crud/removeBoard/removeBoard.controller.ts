import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { removeBoardService } from "./removeBoard.service";
import { RemoveBoardParams } from "./removeBoard.types";

export const removeBoard: ExpressMiddleware<RemoveBoardParams> = async (
  req,
  res
) => {
  const data = await removeBoardService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
