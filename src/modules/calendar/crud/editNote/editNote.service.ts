import { CalendarModel } from "../../../../models";
import { EditNote, EditNoteParams } from "./editNote.types";
import dayjs from "dayjs";

interface EditNoteService {
  update: () => Promise<boolean>;
}

export const editNoteService = async ({
  id,
  note,
  start_date,
  hour,
}: EditNote & EditNoteParams): Promise<EditNoteService> => {
  const update = async (): Promise<boolean> => {
    const startDate = dayjs(start_date).format("YYYY-MM-DD");
    const startHour = dayjs(hour).format("HH:mm");

    const [affectedCount] = await CalendarModel.update(
      {
        note,
        start_date: startDate,
        hour: startHour,
      },
      {
        where: { id },
      }
    );

    return !!affectedCount;
  };

  return { update };
};
