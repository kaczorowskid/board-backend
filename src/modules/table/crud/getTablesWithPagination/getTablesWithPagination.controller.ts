import { ExpressMiddleware } from "../../../../types";
import { getTablesWithPaginationService } from "./getTablesWithPagination.service";
import { GetTablesWithPaginationQuery } from "./getTablesWithPagination.type";

export const getTablesWithPagination: ExpressMiddleware<
  unknown,
  unknown,
  GetTablesWithPaginationQuery
> = async (req, res) => {
  const { user_id, folder_id, take, skip } = req.query;

  const { statusCode, data } = await getTablesWithPaginationService({
    user_id,
    folder_id,
    take: Number(take),
    skip: Number(skip),
  });

  if (data) {
    res.status(statusCode).json(data);
  }
};
