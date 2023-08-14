import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getTablesWithPaginationService } from "./getTablesWithPagination.service";
import { GetTablesWithPaginationQuery } from "./getTablesWithPagination.type";

export const getTablesWithPagination: ExpressMiddleware<
  unknown,
  unknown,
  GetTablesWithPaginationQuery
> = async (req, res) => {
  const {
    user_id,
    folder_id,
    limit,
    offset,
    search_value: searchValue,
  } = req.query;

  const data = await getTablesWithPaginationService({
    user_id,
    folder_id,
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
