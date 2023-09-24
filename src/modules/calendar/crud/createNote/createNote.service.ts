import { v4 as uuidv4 } from "uuid";
import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { CreateNote } from "./createNote.type";
import { CalendarModel } from "../../../../models/CalendarModel.model";
import { noteHasBeenCreated } from "./createNote.helper";
import dayjs from "dayjs";

export const createNoteService = async ({
  start_date,
  hour,
  note,
  user_id,
}: CreateNote) => {
  const [data, error] = await sequelizeWithError(async () => {
    const startDate = dayjs(start_date).format("YYYY-MM-DD");

    const noteData = await CalendarModel.create({
      id: uuidv4(),
      start_date: startDate,
      hour,
      note,
      user_id,
    });

    return noteHasBeenCreated(noteData);
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
