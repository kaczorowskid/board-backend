import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { createNoteService } from "./createNote.service";
import { CreateNoteRequest } from "../../../../contracts/calendar/calendar.type";
import { createNoteRequestSchema } from "../../../../contracts/calendar/calendar.schema";

export const createNote: ExpressMiddleware<unknown, CreateNoteRequest> = async (
  req,
  res
) => {
  try {
    const request = createNoteRequestSchema.parse(req.body);
    const { create } = await createNoteService(request);

    const noteData = await create();

    res.status(HTTPStatus.CREATED).send(noteData);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
