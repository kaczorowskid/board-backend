import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { CommentModel, TicketModel, UserModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import { getTicketData, ticketDoesNotExist } from "./getTicket.helper";
import { GetTicketParams } from "./getTicket.types";

export const getTicketService = async ({ id }: GetTicketParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const ticketData = await TicketModel.findOne({
      where: { id },
      include: [
        {
          model: CommentModel,
          include: [
            {
              model: UserModel,
            },
          ],
        },
      ],
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
