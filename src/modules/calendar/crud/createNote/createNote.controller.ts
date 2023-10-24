import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { createNoteService } from "./createNote.service";
import { CreateNoteRequest } from "../../../../contracts/calendar/calendar.type";

export const createNote: ExpressMiddleware<unknown, CreateNoteRequest> = async (
  req,
  res
) => {
  try {
    const { create } = await createNoteService(req.body);

    const noteData = await create();

    res.status(HTTPStatus.CREATED).send(noteData);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
