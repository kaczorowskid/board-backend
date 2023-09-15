import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { editBoardService } from "./editBoard.service";
import { EditBoard, EditBoardParams } from "./editBoard.types";

export const editBoard: ExpressMiddleware<EditBoardParams, EditBoard> = async (
  req,
  res
) => {
  const data = await editBoardService({ ...req.params, ...req.body });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
