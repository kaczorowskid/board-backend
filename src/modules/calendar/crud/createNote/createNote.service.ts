import { v4 as uuidv4 } from "uuid";
import { CalendarModel } from "../../../../models/CalendarModel.model";
import { CreateNoteRequest } from "../../../../contracts/calendar";
import dayjs from "dayjs";

interface CreateNoteService {
  create: () => Promise<CalendarModel>;
}

export const createNoteService = async ({
  start_date,
  hour,
  note,
  user_id,
}: CreateNoteRequest): Promise<CreateNoteService> => {
  const create = async (): Promise<CalendarModel> => {
    const startDate = dayjs(start_date).format("YYYY-MM-DD");

    const data = await CalendarModel.create({
      id: uuidv4(),
      start_date: startDate as any,
      hour,
      note,
      user_id,
    });

    return data;
  };

  return { create };
};
