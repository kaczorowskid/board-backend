import { Op } from "sequelize";
import {
  BoardModel,
  CalendarModel,
  CommentModel,
  TicketModel,
} from "../../../../models";
import { GetDashboardRequest } from "../../../../contracts/dashboard/dashboard.type";
import dayjs from "dayjs";

interface GetDashboardDataService {
  getBoardRecords: () => Promise<{
    count: number;
    rows: BoardModel[];
  }>;
  getTicketRecords: () => Promise<{
    count: number;
    rows: TicketModel[];
  }>;
  getCalendarRecords: () => Promise<CalendarModel[]>;
}

export const getDashboardDataService = async ({
  user_id,
  date,
}: GetDashboardRequest): Promise<GetDashboardDataService> => {
  const getBoardRecords = async (): Promise<{
    count: number;
    rows: BoardModel[];
  }> => {
    const { count, rows } = await BoardModel.findAndCountAll({
      where: { user_id },
      order: [["created_at", "DESC"]],
      limit: 5,
    });

    return { count, rows };
  };

  const getTicketRecords = async (): Promise<{
    count: number;
    rows: TicketModel[];
  }> => {
    const { count, rows } = await TicketModel.findAndCountAll({
      where: { user_id },
      order: [["created_at", "DESC"]],
      include: [
        {
          model: CommentModel,
        },
      ],
      limit: 5,
    });

    return { count, rows };
  };

  const getCalendarRecords = async (): Promise<CalendarModel[]> => {
    const startDate = dayjs(date).startOf("month").toDate();
    const endDate = dayjs(date).endOf("month").toDate();

    const data = await CalendarModel.findAll({
      where: {
        user_id,
        start_date: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    return data;
  };

  return {
    getBoardRecords,
    getTicketRecords,
    getCalendarRecords,
  };
};
