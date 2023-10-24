import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getCalendarService } from "./getCalendar.service";
import { GetCalendarRequest } from "../../../../contracts/calendar";

export const getCalendar: ExpressMiddleware<
  unknown,
  unknown,
  GetCalendarRequest
> = async (req, res) => {
  try {
    const { getCalendar } = await getCalendarService(req.query);

    const result = await getCalendar();
    res.status(HTTPStatus.OK).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
