import { CommentModel, TicketModel, UserModel } from "../../../../models";
import { GetTicketParams } from "./getTicket.types";

interface GetTicketService {
  get: () => Promise<TicketModel | null>;
}

export const getTicketService = async ({
  id,
}: GetTicketParams): Promise<GetTicketService> => {
  const get = async (): Promise<TicketModel | null> => {
    const data = await TicketModel.findOne({
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

    return data;
  };

  return {
    get,
  };
};
