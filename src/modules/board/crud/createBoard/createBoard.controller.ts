import { v4 as uuidv4 } from "uuid";
import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { createBoardService } from "./createBoard.service";
import { CreateBoardRequest } from "../../../../contracts/board/board.type";
import { dbErrorFormatter } from "../../../helpers";
import { createBoardRequestSchema } from "../../../../contracts/board/board.schema";

export const createBoard: ExpressMiddleware<
  unknown,
  CreateBoardRequest
> = async (req, res) => {
  try {
    const request = createBoardRequestSchema.parse(req.body);
    const { createBoard } = await createBoardService(request);

    const result = await createBoard();

    res.status(HTTPStatus.CREATED).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
