import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { createBoardService } from "./createBoard.service";
import { CreateBoard } from "./createBoard.types";

export const createBoard: ExpressMiddleware<unknown, CreateBoard> = async (
  req,
  res
) => {
  const data = await createBoardService(req.body);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
