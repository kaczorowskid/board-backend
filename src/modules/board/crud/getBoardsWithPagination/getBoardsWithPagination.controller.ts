import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getBoardsWithPaginationService } from "./getBoardsWithPagination.service";
import { GetBoardsWithPaginationRequest } from "../../../../contracts/board/board.type";
import { getBoardsWithPaginationRequestSchema } from "../../../../contracts/board/board.schema";

export const getBoardsWithPagination: ExpressMiddleware<
  unknown,
  unknown,
  GetBoardsWithPaginationRequest
> = async (req, res) => {
  const { user_id, limit, offset, search_value: searchValue } = req.query;

  try {
    const request = getBoardsWithPaginationRequestSchema.parse({
      user_id,
      limit: Number(limit),
      offset: Number(offset),
      search_value: searchValue,
    });
    const { get } = await getBoardsWithPaginationService(request);

    const result = await get();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
