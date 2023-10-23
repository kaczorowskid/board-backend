import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { editBoardService } from "./editBoard.service";
import { EditBoard, EditBoardParams } from "./editBoard.types";

export const editBoard: ExpressMiddleware<EditBoardParams, EditBoard> = async (
  req,
  res
) => {
  try {
    const { edit } = await editBoardService({ ...req.params, ...req.body });

    const result = await edit();

    res.status(HTTPStatus.CREATED).send({ edited: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
