import { v4 as uuidv4 } from "uuid";
import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { createBoardService } from "./createBoard.service";
import { CreateBoard } from "./createBoard.types";
import { dbErrorFormatter } from "../../../helpers";

export const createBoard: ExpressMiddleware<unknown, CreateBoard> = async (
  req,
  res
) => {
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
