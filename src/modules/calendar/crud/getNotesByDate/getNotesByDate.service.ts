import { CalendarModel } from "../../../../models";
import { GetNotesByDateRequest } from "../../../../contracts/calendar/calendar.type";

interface GetNotesByDateService {
  getNoteByDate: () => Promise<CalendarModel[]>;
}

export const getNotesByDateService = async ({
  user_id,
  date,
}: GetNotesByDateRequest): Promise<GetNotesByDateService> => {
  const getNoteByDate = async (): Promise<CalendarModel[]> => {
    const data = await CalendarModel.findAll({
      where: {
        user_id,
        start_date: date,
      },
    });

    return data;
  };

  return { getNoteByDate };
};
