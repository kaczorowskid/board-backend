import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getDashboardDataService } from "./getDashboardData.service";
import { GetDashboardRequest } from "../../../../contracts/dashboard/dashboard.type";

export const getDashboardData: ExpressMiddleware<GetDashboardRequest> = async (
  req,
  res
) => {
  try {
    const { getBoardRecords, getTicketRecords, getCalendarRecords } =
      await getDashboardDataService(req.params);

    const boardRecords = await getBoardRecords();
    const ticketRecords = await getTicketRecords();
    const calendarRecords = await getCalendarRecords();

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
