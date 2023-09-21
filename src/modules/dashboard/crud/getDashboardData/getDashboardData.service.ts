import { sequelizeWithError } from "../../../../database";
import { BoardModel, TicketModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import {
  dashboardDoesNotExistInTheDatabase,
  dashboardExist,
} from "./getDashboardData.helper";
import { GetDashboardDataParam } from "./getDashboardData.types";

export const getDashboardDataService = async ({
  user_id,
}: GetDashboardDataParam) => {
  const [data, error] = await sequelizeWithError(async () => {
    const { count: boardsCount, rows: boardsData } =
      await BoardModel.findAndCountAll({
        where: { user_id },
        limit: 5,
      });

    const { count: ticketsCount, rows: ticketsData } =
      await TicketModel.findAndCountAll({
        where: { user_id },
        limit: 5,
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
