import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { ConfirmShareBoardTokenResult } from "./confirmShareBoardToken.enum";
import { confirmShareBoardTokenService } from "./confirmShareBoardToken.service";
import { ConfirmShareTokenRequest } from "../../../../contracts/board/board.type";
import { confirmShareTokenRequestSchema } from "../../../../contracts/board/board.schema";

export const confirmShareBoardToken: ExpressMiddleware<
  unknown,
  ConfirmShareTokenRequest
> = async (req, res) => {
  try {
    const request = confirmShareTokenRequestSchema.parse(req.body);
    const { boardData, createSharedBoard } =
      await confirmShareBoardTokenService(request);

    const data = await boardData();

    if (data) {
      const result = createSharedBoard(data.id);
      res.status(HTTPStatus.OK).json({ result });
    } else {
      res
        .status(HTTPStatus.NOT_FOUND)
        .json({ result: ConfirmShareBoardTokenResult.BOARD_DOES_NOT_EXIST });
    }
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
