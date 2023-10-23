import { CalendarModel } from "../../../../models";
import { RemoveNoteParams } from "./removeNote.types";

interface RemoveNoteService {
  removeNote: () => Promise<boolean>;
}

export const removeNoteService = async ({
  id,
}: RemoveNoteParams): Promise<RemoveNoteService> => {
  const removeNote = async () => {
    const data = await CalendarModel.destroy({ where: { id } });
    return !!data;
  };

  return { removeNote };
};
