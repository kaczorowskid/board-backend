import { CalendarModel } from "../../../../models";
import {
  UpdateNoteStatus,
  UpdateNoteStatusParams,
} from "./updateNoteStatus.type";
interface EditNoteService {
  update: () => Promise<boolean>;
}

export const updateNoteStatusService = async ({
  id,
  is_done,
}: UpdateNoteStatus & UpdateNoteStatusParams): Promise<EditNoteService> => {
  const update = async (): Promise<boolean> => {
    const [affectedCount] = await CalendarModel.update(
      {
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
