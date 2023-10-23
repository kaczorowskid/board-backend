import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getBoardsWithPaginationService } from "./getBoardsWithPagination.service";
import { GetBoardsWithPaginationQuery } from "./getBoardsWithPagination.type";

export const getBoardsWithPagination: ExpressMiddleware<
  unknown,
  unknown,
  GetBoardsWithPaginationQuery
> = async (req, res) => {
  const { user_id, limit, offset, search_value: searchValue } = req.query;

  try {
    const { get } = await getBoardsWithPaginationService({
      user_id,
      limit: Number(limit),
      offset: Number(offset),
      search_value: searchValue,
    });

    const result = await get();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
