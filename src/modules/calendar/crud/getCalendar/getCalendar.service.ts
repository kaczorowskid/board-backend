import { Op } from "sequelize";
import { CalendarModel } from "../../../../models";
import { GetCalendarRequest } from "../../../../contracts/calendar";
import dayjs from "dayjs";

interface GetCalendarService {
  getCalendar: () => Promise<CalendarModel[]>;
}

export const getCalendarService = async ({
  user_id,
  date,
}: GetCalendarRequest): Promise<GetCalendarService> => {
  const getCalendar = async (): Promise<CalendarModel[]> => {
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

  return { getCalendar };
};
