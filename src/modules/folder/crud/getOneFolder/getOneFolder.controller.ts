import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getOneFolderService } from "./getOneFolder.service";
import { GetOneFolderParams } from "./getOneFolder.type";

export const getOneFolder: ExpressMiddleware<GetOneFolderParams> = async (
  req,
  res
) => {
  const data = await getOneFolderService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
