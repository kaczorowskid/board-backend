import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { CalendarModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import { getNoteData, noteDoesNotExist } from "./getNote.helper";
import { GetNoteParams } from "./getNote.types";

export const getNoteService = async ({ id }: GetNoteParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const noteData = await CalendarModel.findOne({
      where: { id },
    });

    if (noteData) {
      return getNoteData(noteData);
    } else {
      return noteDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
