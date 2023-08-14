import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getTablesWithPaginationService } from "./getTablesWithPagination.service";
import { GetTablesWithPaginationQuery } from "./getTablesWithPagination.type";

export const getTablesWithPagination: ExpressMiddleware<
  unknown,
  unknown,
  GetTablesWithPaginationQuery
> = async (req, res) => {
  const { user_id, folder_id, take, skip } = req.query;

  const data = await getTablesWithPaginationService({
    user_id,
    folder_id,
    take: Number(take),
    skip: Number(skip),
  });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
