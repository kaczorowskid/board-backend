import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getNoteService } from "./getNote.service";
import { GetNoteRequest } from "../../../../contracts/calendar";

export const getNote: ExpressMiddleware<GetNoteRequest> = async (req, res) => {
  try {
    const { getNote } = await getNoteService(req.params);

    const result = await getNote();
    res.status(HTTPStatus.OK).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
