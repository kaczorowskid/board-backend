import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { removeNoteService } from "./removeNote.service";
import { RemoveNoteRequest } from "../../../../contracts/calendar/calendar.type";

export const removeNote: ExpressMiddleware<RemoveNoteRequest> = async (
  req,
  res
) => {
  try {
    const { removeNote } = await removeNoteService(req.params);

    const result = await removeNote();
    res
      .status(result ? HTTPStatus.OK : HTTPStatus.CONFLICT)
      .json({ removed: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
