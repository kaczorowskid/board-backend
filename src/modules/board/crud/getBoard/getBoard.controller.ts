import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getBoardService } from "./getBoard.service";
import { getBoardRequestSchema } from "../../../../contracts/board/board.schema";
import {
  CustomGetBoardRequest,
  CustomGetBoardRequestQuery,
} from "./getBoard.types";

export const getBoard: ExpressMiddleware<
  CustomGetBoardRequest,
  unknown,
  CustomGetBoardRequestQuery
> = async (req, res) => {
  try {
    const request = getBoardRequestSchema.parse({
      ...req.params,
      ...req.query,
    });
    const { get } = await getBoardService(request);

    const result = await get();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
