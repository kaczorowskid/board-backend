import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getDashboardDataService } from "./getDashboardData.service";
import { GetDashboardRequest } from "../../../../contracts/dashboard/dashboard.type";
import { getDashboardRequest } from "../../../../contracts/dashboard/dashboard.schema";

export const getDashboardData: ExpressMiddleware<GetDashboardRequest> = async (
  req,
  res
) => {
  try {
    const request = getDashboardRequest.parse(req.params);
    const { getBoardRecords, getTicketRecords, getCalendarRecords } =
      await getDashboardDataService(request);

    const [boardRecords, ticketRecords, calendarRecords] = await Promise.all([
      getBoardRecords(),
      getTicketRecords(),
      getCalendarRecords(),
    ]);

    const mappedData = {
      recentBoards: {
        data: boardRecords.rows,
        count: boardRecords.count,
      },
      recentTickets: {
        data: ticketRecords.rows,
        count: ticketRecords.count,
      },
      calendar: calendarRecords,
    };

    res.status(HTTPStatus.OK).send(mappedData);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
