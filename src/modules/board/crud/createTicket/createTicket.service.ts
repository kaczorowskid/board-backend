import { v4 as uuidv4 } from "uuid";
import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { TicketModel } from "../../../../models";
import { CreateTicket } from "./createTicket.types";
import { ticketHasBeenCreated } from "./createTicket.helper";

export const createTicketService = async ({
  title,
  description,
  start,
  end,
  prio,
  order,
  column_id,
}: CreateTicket) => {
  const [data, error] = await sequelizeWithError(async () => {
    const ticket = await TicketModel.create({
      id: uuidv4(),
      // code: "",
      title,
      description,
      start,
      end,
      prio,
      order,
      // comments: 0,
      column_id,
    });

    return ticketHasBeenCreated(ticket);
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
