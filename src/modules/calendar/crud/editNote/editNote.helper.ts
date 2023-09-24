import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { EditNoteEnum } from "./editNote.enum";

export const noteHasBeenEdited = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data: EditNoteEnum.NOTE_HAS_BEEN_EDITED,
});
