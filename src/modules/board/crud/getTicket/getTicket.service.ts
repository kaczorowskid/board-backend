import { CommentModel, TicketModel, UserModel } from "../../../../models";
import { GetTicketRequest } from "../../../../contracts/board/board.type";

interface GetTicketService {
  get: () => Promise<TicketModel | null>;
}

export const getTicketService = async ({
  id,
}: GetTicketRequest): Promise<GetTicketService> => {
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
      order: [[CommentModel, "created_at", "DESC"]],
    });

    return data;
  };

  return {
    get,
  };
};
