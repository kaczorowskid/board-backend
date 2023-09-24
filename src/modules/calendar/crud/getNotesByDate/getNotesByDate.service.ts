import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { CalendarModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import { GetNotesByDateQuery } from "./getNotesByDate.types";
import {
  getNotesByDateData,
  notesByDateDoNotExist,
} from "./getNotesByDate.helper";

export const getNotesByDateService = async ({
  user_id,
  date,
}: GetNotesByDateQuery) => {
  const [data, error] = await sequelizeWithError(async () => {
    const noteData = await CalendarModel.findAll({
      where: {
        user_id,
        start_date: date,
      },
    });

    if (noteData) {
      return getNotesByDateData(noteData);
    } else {
      return notesByDateDoNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
