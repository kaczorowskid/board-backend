import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { confirmShareBoardTokenService } from "./confirmShareBoardToken.service";
import { ConfirmShareBoard } from "./confirmShareBoardToken.types";

export const confirmShareBoardToken: ExpressMiddleware<
  unknown,
  ConfirmShareBoard
> = async (req, res) => {
  const data = await confirmShareBoardTokenService(req.body);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
