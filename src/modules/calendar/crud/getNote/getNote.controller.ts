import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getNoteService } from "./getNote.service";
import { GetNoteParams } from "./getNote.types";

export const getNote: ExpressMiddleware<GetNoteParams> = async (req, res) => {
  const data = await getNoteService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
