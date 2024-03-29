import { CalendarModel } from "../../../../models";
import { EditNote, EditNoteParams } from "./editNote.types";
import dayjs from "dayjs";

interface EditNoteService {
  update: () => Promise<boolean>;
}

export const editNoteService = async ({
  id,
  note,
  is_done,
  start_date,
}: EditNote & EditNoteParams): Promise<EditNoteService> => {
  const update = async (): Promise<boolean> => {
    const startDate = dayjs(start_date).format("YYYY-MM-DD");

    const [affectedCount] = await CalendarModel.update(
      {
        note,
        start_date: startDate as unknown as Date,
        is_done,
      },
      {
        where: { id },
      }
    );

    return !!affectedCount;
  };

  return { update };
};
