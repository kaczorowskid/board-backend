import { v4 as uuidv4 } from "uuid";
import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { createBoardService } from "./createBoard.service";
import { CreateBoardRequest } from "../../../../contracts/board/board.type";
import { dbErrorFormatter } from "../../../helpers";

export const createBoard: ExpressMiddleware<
  unknown,
  CreateBoardRequest
> = async (req, res) => {
  try {
    const { createBoard, createSharedBoard } = await createBoardService(
      req.body
    );

    const boardId = uuidv4();

    const result = await createBoard(boardId);
    await createSharedBoard(boardId);

    res.status(HTTPStatus.CREATED).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
