import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { editBoardService } from "./editBoard.service";
import { EditBoard, EditBoardParams } from "./editBoard.types";
import { editBoardRequestSchema } from "../../../../contracts/board/board.schema";

export const editBoard: ExpressMiddleware<EditBoardParams, EditBoard> = async (
  req,
  res
) => {
  try {
    const request = editBoardRequestSchema.parse({
      ...req.params,
      ...req.body,
    });
    const { edit } = await editBoardService(request);

    const result = await edit();

    res.status(HTTPStatus.CREATED).send({ edited: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
