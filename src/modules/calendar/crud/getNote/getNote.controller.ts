import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getNoteService } from "./getNote.service";
import { GetNoteRequest } from "../../../../contracts/calendar/calendar.type";
import { getNoteRequestSchema } from "../../../../contracts/calendar/calendar.schema";

export const getNote: ExpressMiddleware<GetNoteRequest> = async (req, res) => {
  try {
    const request = getNoteRequestSchema.parse(req.params);
    const { getNote } = await getNoteService(request);

    const result = await getNote();
    res.status(HTTPStatus.OK).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
