import { CalendarModel } from "../../../../models";
import { RemoveNoteRequest } from "../../../../contracts/calendar/calendar.type";

interface RemoveNoteService {
  removeNote: () => Promise<boolean>;
}

export const removeNoteService = async ({
  id,
}: RemoveNoteRequest): Promise<RemoveNoteService> => {
  const removeNote = async () => {
    const data = await CalendarModel.destroy({ where: { id } });
    return !!data;
  };

  return { removeNote };
};
