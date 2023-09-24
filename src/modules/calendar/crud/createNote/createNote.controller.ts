import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { createNoteService } from "./createNote.service";
import { CreateNote } from "./createNote.type";

export const createNote: ExpressMiddleware<unknown, CreateNote> = async (
  req,
  res
) => {
  const data = await createNoteService(req.body);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
