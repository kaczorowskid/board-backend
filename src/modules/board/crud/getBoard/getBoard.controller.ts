import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getBoardService } from "./getBoard.service";
import { GetBoardParams } from "./getBoard.types";

export const getBoard: ExpressMiddleware<GetBoardParams> = async (req, res) => {
  const data = await getBoardService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
