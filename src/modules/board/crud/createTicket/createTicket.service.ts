import { v4 as uuidv4 } from "uuid";
import { TicketModel } from "../../../../models";
import { CreateTicket } from "./createTicket.types";

interface CreateTicketService {
  create: () => Promise<TicketModel>;
}

export const createTicketService = async ({
  title,
  description,
  start,
  end,
  prio,
  order,
  column_id,
  user_id,
}: CreateTicket): Promise<CreateTicketService> => {
  const create = async (): Promise<TicketModel> => {
    const data = await TicketModel.create({
      id: uuidv4(),
      title,
      description,
      start,
      end,
      prio,
      order,
      column_id,
      user_id,
    });

    return data;
  };

  return {
    create,
  };
};
