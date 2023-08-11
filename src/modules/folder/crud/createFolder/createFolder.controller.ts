import { ExpressMiddleware } from "../../../../types";
import { createFolderService } from "./createFolder.service";
import { CreateFolder } from "./createFolder.type";

export const createFolder: ExpressMiddleware<unknown, CreateFolder> = async (
  req,
  res
) => {
  const { statusCode, data } = await createFolderService({
    ...req.body,
  });

  if (data) {
    res.status(statusCode).json(data);
  }
};
