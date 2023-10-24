import { EditNoteRequest } from "../../../../contracts/calendar";

export interface EditNote
  extends Pick<EditNoteRequest, "note" | "start_date" | "hour"> {}

export interface EditNoteParams extends Pick<EditNoteRequest, "id"> {}
