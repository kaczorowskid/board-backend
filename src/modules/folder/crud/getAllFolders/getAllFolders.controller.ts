import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getAllFoldersService } from "./getAllFolders.service";
import { GetAllFoldersQuery } from "./getAllFolders.type";

export const getAllFolders: ExpressMiddleware<
  unknown,
  unknown,
  GetAllFoldersQuery
> = async (req, res) => {
  const data = await getAllFoldersService(req.query);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
