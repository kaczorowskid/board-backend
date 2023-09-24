import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { editNoteService } from "./editNote.service";
import { EditNote, EditNoteParams } from "./editNote.types";

export const editNote: ExpressMiddleware<EditNoteParams, EditNote> = async (
  req,
  res
) => {
  const data = await editNoteService({ ...req.params, ...req.body });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
