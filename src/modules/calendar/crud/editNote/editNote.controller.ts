import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { editNoteService } from "./editNote.service";
import { EditNote, EditNoteParams } from "./editNote.types";
import { editNoteRequestSchema } from "../../../../contracts/calendar/calendar.schema";

export const editNote: ExpressMiddleware<EditNoteParams, EditNote> = async (
  req,
  res
) => {
  try {
    const request = editNoteRequestSchema.parse({ ...req.params, ...req.body });
    const { update } = await editNoteService(request);

    const result = await update();
    res.status(HTTPStatus.OK).json({ edited: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
