import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { removeNoteService } from "./removeNote.service";
import { RemoveNoteParams } from "./removeNote.types";

export const removeNote: ExpressMiddleware<RemoveNoteParams> = async (
  req,
  res
) => {
  const data = await removeNoteService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
