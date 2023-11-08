import { v4 as uuidv4 } from "uuid";
import { TicketModel } from "../../../../models";
import { CreateTicketRequest } from "../../../../contracts/board/board.type";

interface CreateTicketService {
  create: () => Promise<TicketModel>;
}

export const createTicketService = async ({
  title,
  description,
  prio,
  column_id,
  user_id,
}: CreateTicketRequest): Promise<CreateTicketService> => {
  const create = async (): Promise<TicketModel> => {
    const data = await TicketModel.create({
      id: uuidv4(),
      title,
      description,
      prio,
      order: 0,
      column_id,
      user_id,
    });

    return data;
  };

  return {
    create,
  };
};
