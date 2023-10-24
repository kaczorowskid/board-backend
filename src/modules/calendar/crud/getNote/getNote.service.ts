import { CalendarModel } from "../../../../models";
import { GetNoteRequest } from "../../../../contracts/calendar/calendar.type";

interface GetNoteService {
  getNote: () => Promise<CalendarModel | null>;
}

export const getNoteService = async ({
  id,
}: GetNoteRequest): Promise<GetNoteService> => {
  const getNote = async (): Promise<CalendarModel | null> => {
    const data = await CalendarModel.findOne({
      where: { id },
    });

    return data;
  };

  return { getNote };
};
