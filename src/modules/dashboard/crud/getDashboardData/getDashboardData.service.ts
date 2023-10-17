import { Op } from "sequelize";
import { sequelizeWithError } from "../../../../database";
import {
  BoardModel,
  CalendarModel,
  CommentModel,
  TicketModel,
} from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import {
  dashboardDoesNotExistInTheDatabase,
  dashboardExist,
} from "./getDashboardData.helper";
import { GetDashboardDataParam } from "./getDashboardData.types";
import dayjs from "dayjs";

export const getDashboardDataService = async ({
  user_id,
  date,
}: GetDashboardDataParam) => {
  const [data, error] = await sequelizeWithError(async () => {
    const { count: boardsCount, rows: boardsData } =
      await BoardModel.findAndCountAll({
        where: { user_id },
        limit: 5,
        order: [["updated_at", "DESC"]],
      });

    const { count: ticketsCount, rows: ticketsData } =
      await TicketModel.findAndCountAll({
        where: { user_id },
        limit: 5,
        order: [["updated_at", "DESC"]],
        include: [
          {
            model: CommentModel,
          },
        ],
      });

    const startDate = dayjs(date).startOf("month").toDate();
    const endDate = dayjs(date).endOf("month").toDate();

    const calendarData = await CalendarModel.findAll({
      where: {
        user_id,
        start_date: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    const mappedData = {
      recentBoards: {
        data: boardsData,
        count: boardsCount,
      },
      recentTickets: {
        data: ticketsData,
        count: ticketsCount,
      },
      calendar: calendarData,
    };

    if (mappedData) {
      return dashboardExist(mappedData);
    } else {
      return dashboardDoesNotExistInTheDatabase();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
