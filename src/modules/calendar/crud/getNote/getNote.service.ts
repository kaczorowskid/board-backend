import { CalendarModel } from "../../../../models";
import { GetNoteParams } from "./getNote.types";

interface GetNoteService {
  getNote: () => Promise<CalendarModel | null>;
}

export const getNoteService = async ({
  id,
}: GetNoteParams): Promise<GetNoteService> => {
  const getNote = async (): Promise<CalendarModel | null> => {
    const data = await CalendarModel.findOne({
      where: { id },
    });

    return data;
  };

  return { getNote };
};
