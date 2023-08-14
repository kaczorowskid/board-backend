import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { createFolderService } from "./createFolder.service";
import { CreateFolder } from "./createFolder.type";

export const createFolder: ExpressMiddleware<unknown, CreateFolder> = async (
  req,
  res
) => {
  const data = await createFolderService({
    ...req.body,
  });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
