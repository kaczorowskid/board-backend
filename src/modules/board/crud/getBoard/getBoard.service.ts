import {
  BoardModel,
  ColumnModel,
  CommentModel,
  TicketModel,
} from "../../../../models";
import {
  CustomGetBoardRequest,
  CustomGetBoardRequestQuery,
} from "./getBoard.types";
import { isLike, isNotLike } from "./getBoard.utils";

interface GetBoardService {
  get: () => Promise<BoardModel | null>;
}

export const getBoardService = async ({
  id,
  text,
  prio,
}: CustomGetBoardRequest &
  CustomGetBoardRequestQuery): Promise<GetBoardService> => {
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
              where: {
                ...isNotLike(text),
                ...isNotLike(prio),
              },
              separate: true,
              order: [["order", "asc"]],
            },
            {
              model: TicketModel,
              where: {
                ...isLike(text),
                ...isLike(prio),
              },
              separate: true,
              order: [["order", "asc"]],
            },
          ],
        },
      ],
      order: [[ColumnModel, "created_at", "asc"]],
    });

    return data;
  };

  return {
    get,
  };
};
