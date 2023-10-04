import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { createShareBoardTokenService } from "./createShareBoardToken.service";
import { CreateShareBoardToken } from "./createShareBoardToken.types";

export const createShareBoardToken: ExpressMiddleware<
  unknown,
  CreateShareBoardToken
> = async (req, res) => {
  const data = await createShareBoardTokenService(req.body);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
