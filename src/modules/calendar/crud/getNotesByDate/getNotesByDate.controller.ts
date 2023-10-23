import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getNotesByDateService } from "./getNotesByDate.service";
import { GetNotesByDateQuery } from "./getNotesByDate.types";

export const getNotesByDate: ExpressMiddleware<
  unknown,
  unknown,
  GetNotesByDateQuery
> = async (req, res) => {
  try {
    const { getNoteByDate } = await getNotesByDateService(req.query);

    const result = await getNoteByDate();
    res.status(HTTPStatus.OK).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
