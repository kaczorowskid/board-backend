import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getFoldersWithPaginationService } from "./getFoldersWithPagination.service";
import { GetFoldersWithPaginationQuery } from "./getFoldersWithPagination.type";

export const getFoldersWithPagination: ExpressMiddleware<
  unknown,
  unknown,
  GetFoldersWithPaginationQuery
> = async (req, res) => {
  const { user_id, limit, offset, search_value: searchValue } = req.query;

  const data = await getFoldersWithPaginationService({
    user_id,
    limit: Number(limit),
    offset: Number(offset),
    search_value: searchValue,
  });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
