import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { removeNoteService } from "./removeNote.service";
import { RemoveNoteRequest } from "../../../../contracts/calendar/calendar.type";
import { removeNoteRequestSchema } from "../../../../contracts/calendar/calendar.schema";

export const removeNote: ExpressMiddleware<RemoveNoteRequest> = async (
  req,
  res
) => {
  try {
    const request = removeNoteRequestSchema.parse(req.params);
    const { removeNote } = await removeNoteService(request);

    const result = await removeNote();
    res
      .status(result ? HTTPStatus.OK : HTTPStatus.CONFLICT)
      .json({ removed: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
