import {
  BoardModel,
  ColumnModel,
  CommentModel,
  TicketModel,
} from "../../../../models";
import { GetBoardParams } from "./getBoard.types";

interface GetBoardService {
  get: () => Promise<BoardModel | null>;
}

export const getBoardService = async ({ id }: GetBoardParams) => {
  const get = async (): Promise<BoardModel | null> => {
    const data = await BoardModel.findOne({
      where: { id },
      include: [
        {
          model: ColumnModel,
          include: [
            {
              model: TicketModel,
              include: [
                {
                  model: CommentModel,
                },
              ],
            },
          ],
        },
      ],
      order: [
        [ColumnModel, "created_at", "asc"],
        [ColumnModel, TicketModel, "order", "asc"],
      ],
    });

    return data;
  };

  return {
    get,
  };
};
