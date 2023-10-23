import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { createNoteService } from "./createNote.service";
import { CreateNote } from "./createNote.type";

export const createNote: ExpressMiddleware<unknown, CreateNote> = async (
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
