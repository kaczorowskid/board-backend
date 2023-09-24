import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getNotesByDateService } from "./getNotesByDate.service";
import { GetNotesByDateQuery } from "./getNotesByDate.types";

export const getNotesByDate: ExpressMiddleware<
  unknown,
  unknown,
  GetNotesByDateQuery
> = async (req, res) => {
  const data = await getNotesByDateService(req.query);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
