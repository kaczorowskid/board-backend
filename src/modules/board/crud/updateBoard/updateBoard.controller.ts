import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { updateBoardService } from "./updateBoard.service";
import { UpdateBoardBody, UpdateBoardQuery } from "./updateBoard.types";

export const updateBoard: ExpressMiddleware<
  UpdateBoardQuery,
  UpdateBoardBody
  // UpdateBoardQuery
> = async (req, res) => {
  const data = await updateBoardService({ ...req.params, ...req.body });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
