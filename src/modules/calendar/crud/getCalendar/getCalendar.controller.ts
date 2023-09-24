import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getCalendarService } from "./getCalendar.service";
import { GetCalendarQuery } from "./getCalendar.types";

export const getCalendar: ExpressMiddleware<
  unknown,
  unknown,
  GetCalendarQuery
> = async (req, res) => {
  const data = await getCalendarService(req.query);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
