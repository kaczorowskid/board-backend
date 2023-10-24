import { TicketModel } from "../../../../models";
import { EditTicket, EditTicketParams } from "./editTicket.types";

interface EditTicketService {
  edit: () => Promise<boolean>;
}

export const editTicketService = async ({
  id,
  title,
  description,
  prio,
}: EditTicket & EditTicketParams): Promise<EditTicketService> => {
  const edit = async (): Promise<boolean> => {
    const [affectedCount] = await TicketModel.update(
      {
        title,
        description,
        prio,
      },
      {
        where: { id },
      }
    );

    return !!affectedCount;
  };

  return {
    edit,
  };
};
