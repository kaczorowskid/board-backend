import { ExpressMiddleware } from "../../../../types";
import { getAllFoldersService } from "./getAllFolder.service";
import { GetAllFoldersQuery } from "./getAllFolders.type";

export const getAllFolders: ExpressMiddleware<
  unknown,
  unknown,
  GetAllFoldersQuery
> = async (req, res) => {
  const { statusCode, data } = await getAllFoldersService(req.query);

  if (data) {
    res.status(statusCode || 400).json(data);
  }
};
