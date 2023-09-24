import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Calendar } from "../../types";
import { GetNoteEnum } from "./getNote.enum";

export const getNoteData = (data: Calendar): DataResponse<Calendar> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const noteDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetNoteEnum.NOTE_DOES_NOT_EXIST,
});
