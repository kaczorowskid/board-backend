import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { TicketModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import { getTicketData, ticketDoesNotExist } from "./getTicket.helper";
import { GetTicketParams } from "./getTicket.types";

export const getTicketService = async ({ id }: GetTicketParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const ticketData = await TicketModel.findOne({
      where: { id },
    });

    if (ticketData) {
      return getTicketData(ticketData);
    } else {
      return ticketDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
