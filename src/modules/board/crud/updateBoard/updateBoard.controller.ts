import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { updateBoardService } from "./updateBoard.service";
import { UpdateBoardBody, UpdateBoardQuery } from "./updateBoard.types";
import { updateBoardRequestSchema } from "../../../../contracts/board/board.schema";

export const updateBoard: ExpressMiddleware<
  UpdateBoardQuery,
  UpdateBoardBody
> = async (req, res) => {
  try {
    const request = updateBoardRequestSchema.parse({
      ...req.params,
      ...req.body,
    });
    const { update } = await updateBoardService(request);

    const result = await update();
    res.status(HTTPStatus.OK).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
