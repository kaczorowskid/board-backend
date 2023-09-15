import { sequelizeWithError } from "../../../../database";
import { TicketModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import {
  removedTicketSuccessfully,
  ticketDoesNotExist,
} from "./removeTicket.helper";
import { RemoveTicketParams } from "./removeTicket.types";

export const removeTicketService = async ({ id }: RemoveTicketParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const ticketData = await TicketModel.destroy({ where: { id } });

    if (ticketData) {
      return removedTicketSuccessfully();
    } else {
      return ticketDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
