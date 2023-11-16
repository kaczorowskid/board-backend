import { UpdateNoteStatusRequest } from "../../../../contracts/calendar/calendar.type";

export interface UpdateNoteStatus
  extends Pick<UpdateNoteStatusRequest, "is_done"> {}
export interface UpdateNoteStatusParams
  extends Pick<UpdateNoteStatusRequest, "id"> {}
