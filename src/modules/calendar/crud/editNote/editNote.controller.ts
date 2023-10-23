import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { editNoteService } from "./editNote.service";
import { EditNote, EditNoteParams } from "./editNote.types";

export const editNote: ExpressMiddleware<EditNoteParams, EditNote> = async (
  req,
  res
) => {
  try {
    const { update } = await editNoteService({ ...req.params, ...req.body });

    const result = await update();
    res.status(HTTPStatus.OK).json({ edited: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
