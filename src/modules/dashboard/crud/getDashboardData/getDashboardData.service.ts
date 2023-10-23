import { Op } from "sequelize";
import {
  BoardModel,
  CalendarModel,
  CommentModel,
  TicketModel,
} from "../../../../models";

import { GetDashboardDataParam } from "./getDashboardData.types";
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
}: GetDashboardDataParam): Promise<GetDashboardDataService> => {
  const getBoardRecords = async (): Promise<{
    count: number;
    rows: BoardModel[];
  }> => {
    const { count, rows } = await BoardModel.findAndCountAll({
      where: { user_id },
      limit: 5,
      order: [["created_at", "DESC"]],
    });

    return { count, rows };
  };

  const getTicketRecords = async (): Promise<{
    count: number;
    rows: TicketModel[];
  }> => {
    const { count, rows } = await TicketModel.findAndCountAll({
      where: { user_id },
      limit: 5,
      order: [["created_at", "DESC"]],
      include: [
        {
          model: CommentModel,
        },
      ],
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
