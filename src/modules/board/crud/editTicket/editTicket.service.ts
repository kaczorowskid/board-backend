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
  start,
  end,
  order,
}: EditTicket & EditTicketParams): Promise<EditTicketService> => {
  const edit = async (): Promise<boolean> => {
    const [affectedCount] = await TicketModel.update(
      {
        title,
        description,
        prio,
        start,
        end,
        order,
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
