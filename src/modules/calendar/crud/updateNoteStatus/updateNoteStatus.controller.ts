import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { updateNoteStatusRequestSchema } from "../../../../contracts/calendar/calendar.schema";
import {
  UpdateNoteStatus,
  UpdateNoteStatusParams,
} from "./updateNoteStatus.type";
import { updateNoteStatusService } from "./updateNoteStatus.service";

export const updateNoteStatus: ExpressMiddleware<
  UpdateNoteStatusParams,
  UpdateNoteStatus
> = async (req, res) => {
  try {
    const request = updateNoteStatusRequestSchema.parse({
      ...req.params,
      ...req.body,
    });
    const { update } = await updateNoteStatusService(request);

    const result = await update();
    res.status(HTTPStatus.OK).json({ edited: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
