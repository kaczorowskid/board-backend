import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { TicketModel } from "../../../../models";
import { EditTicket, EditTicketParams } from "./editTicket.types";
import { ticketHasBeenEdited } from "./editTicket.helper";

export const editTicketService = async ({
  id,
  title,
  description,
  prio,
  start,
  end,
  order,
}: EditTicket & EditTicketParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    TicketModel.update(
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

    return ticketHasBeenEdited();
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
