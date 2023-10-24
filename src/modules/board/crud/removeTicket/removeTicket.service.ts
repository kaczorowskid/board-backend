import { TicketModel } from "../../../../models";
import { RemoveTicketRequest } from "../../../../contracts/board/board.type";

interface RemoveTicketService {
  remove: () => Promise<boolean>;
}

export const removeTicketService = async ({
  id,
}: RemoveTicketRequest): Promise<RemoveTicketService> => {
  const remove = async (): Promise<boolean> => {
    const data = await TicketModel.destroy({ where: { id } });

    return !!data;
  };

  return {
    remove,
  };
};
