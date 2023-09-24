import { Op } from "sequelize";
import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { CalendarModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import { GetCalendarQuery } from "./getCalendar.types";
import { calendarDoesNotExist, getCalendarData } from "./getCalendar.helper";
import dayjs from "dayjs";

export const getCalendarService = async ({
  user_id,
  date,
}: GetCalendarQuery) => {
  const [data, error] = await sequelizeWithError(async () => {
    const startDate = dayjs(date).startOf("month").toDate();
    const endDate = dayjs(date).endOf("month").toDate();

    const noteData = await CalendarModel.findAll({
      where: {
        user_id,
        start_date: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    if (noteData) {
      return getCalendarData(noteData);
    } else {
      return calendarDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
