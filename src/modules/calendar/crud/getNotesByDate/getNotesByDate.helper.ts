import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Calendar } from "../../types";
import { GetNotesByDateEnum } from "./getNotesByDate.enum";

export const getNotesByDateData = (
  data: Calendar[]
): DataResponse<Calendar[]> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const notesByDateDoNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetNotesByDateEnum.CALENDAR_DOES_NOT_EXIST,
});
