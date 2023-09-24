import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { CalendarModel } from "../../../../models";
import { EditNote, EditNoteParams } from "./editNote.types";
import { noteHasBeenEdited } from "./editNote.helper";
import dayjs from "dayjs";

export const editNoteService = async ({
  id,
  note,
  start_date,
  hour,
}: EditNote & EditNoteParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const startDate = dayjs(start_date).format("YYYY-MM-DD");
    const startHour = dayjs(hour).format("HH:mm");

    CalendarModel.update(
      {
        note,
        start_date: startDate,
        hour: startHour,
      },
      {
        where: { id },
      }
    );

    return noteHasBeenEdited();
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
