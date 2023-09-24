import { sequelizeWithError } from "../../../../database";
import { CalendarModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import { noteDoesNotExist, removedNoteSuccessfully } from "./removeNote.helper";
import { RemoveNoteParams } from "./removeNote.types";

export const removeNoteService = async ({ id }: RemoveNoteParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const ticketData = await CalendarModel.destroy({ where: { id } });

    if (ticketData) {
      return removedNoteSuccessfully();
    } else {
      return noteDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
