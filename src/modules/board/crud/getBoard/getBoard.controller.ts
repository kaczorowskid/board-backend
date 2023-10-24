import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getBoardService } from "./getBoard.service";
import { GetBoardRequest } from "../../../../contracts/board/board.type";

export const getBoard: ExpressMiddleware<GetBoardRequest> = async (
  req,
  res
) => {
  try {
    const { get } = await getBoardService(req.params);

    const result = await get();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
