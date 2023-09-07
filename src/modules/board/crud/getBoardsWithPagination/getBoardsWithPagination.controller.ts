import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getBoardsWithPaginationService } from "./getBoardsWithPagination.service";
import { GetBoardsWithPaginationQuery } from "./getBoardsWithPagination.type";

export const getBoardsWithPagination: ExpressMiddleware<
  unknown,
  unknown,
  GetBoardsWithPaginationQuery
> = async (req, res) => {
  const { user_id, limit, offset, search_value: searchValue } = req.query;

  const data = await getBoardsWithPaginationService({
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
