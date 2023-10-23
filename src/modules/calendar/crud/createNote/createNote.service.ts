import { v4 as uuidv4 } from "uuid";
import { CreateNote } from "./createNote.type";
import { CalendarModel } from "../../../../models/CalendarModel.model";
import dayjs from "dayjs";

interface CreateNoteService {
  create: () => Promise<CalendarModel>;
}

export const createNoteService = async ({
  start_date,
  hour,
  note,
  user_id,
}: CreateNote): Promise<CreateNoteService> => {
  const create = async (): Promise<CalendarModel> => {
    const startDate = dayjs(start_date).format("YYYY-MM-DD");

    const data = await CalendarModel.create({
      id: uuidv4(),
      start_date: startDate,
      hour,
      note,
      user_id,
    });

    return data;
  };

  return { create };
};
