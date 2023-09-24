import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { RemoveNoteEnum } from "./removeNote.enum";

export const removedNoteSuccessfully = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.OK),
  data: RemoveNoteEnum.NOTE_REMOVED_SUCCESSFULLY,
});

export const noteDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: RemoveNoteEnum.NOTE_DOES_NOT_EXIST,
});
