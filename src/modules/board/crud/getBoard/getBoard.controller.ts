import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getBoardService } from "./getBoard.service";
import { GetBoardRequest } from "../../../../contracts/board/board.type";
import { getBoardRequestSchema } from "../../../../contracts/board/board.schema";

export const getBoard: ExpressMiddleware<GetBoardRequest> = async (
  req,
  res
) => {
  try {
    const request = getBoardRequestSchema.parse(req.params);
    const { get } = await getBoardService(request);

    const result = await get();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
