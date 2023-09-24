import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Calendar } from "../../types";
import { GetCalendarEnum } from "./getCalendar.enum";

export const getCalendarData = (
  data: Calendar[]
): DataResponse<Calendar[]> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const calendarDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetCalendarEnum.CALENDAR_DOES_NOT_EXIST,
});
