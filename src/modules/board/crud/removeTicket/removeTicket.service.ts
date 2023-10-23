import { TicketModel } from "../../../../models";
import { RemoveTicketParams } from "./removeTicket.types";

interface RemoveTicketService {
  remove: () => Promise<boolean>;
}

export const removeTicketService = async ({
  id,
}: RemoveTicketParams): Promise<RemoveTicketService> => {
  const remove = async (): Promise<boolean> => {
    const data = await TicketModel.destroy({ where: { id } });

    return !!data;
  };

  return {
    remove,
  };
};
