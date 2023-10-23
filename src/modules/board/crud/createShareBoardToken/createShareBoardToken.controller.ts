import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { CreateShareBoardTokenEnum } from "./createShareBoardToken.enum";
import { createShareBoardTokenService } from "./createShareBoardToken.service";
import { CreateShareBoardToken } from "./createShareBoardToken.types";

export const createShareBoardToken: ExpressMiddleware<
  unknown,
  CreateShareBoardToken
> = async (req, res) => {
  try {
    const { chceckIfBoardExists, createToken } =
      await createShareBoardTokenService(req.body);

    const isExits = await chceckIfBoardExists();

    if (!isExits) {
      res
        .status(HTTPStatus.NOT_FOUND)
        .json({ result: CreateShareBoardTokenEnum.BOARD_DOES_NOT_EXIST });
    }

    const result = createToken();
    res.status(HTTPStatus.CREATED).json({ result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
