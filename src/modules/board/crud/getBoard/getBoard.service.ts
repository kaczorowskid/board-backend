import {
  BoardModel,
  ColumnModel,
  CommentModel,
  TicketModel,
} from "../../../../models";
import { Op } from "sequelize";
import {
  CustomGetBoardRequest,
  CustomGetBoardRequestQuery,
} from "./getBoard.types";

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
                ...(text ? { title: { [Op.notLike]: `%${text}%` } } : {}),
                ...(prio ? { prio: { [Op.notLike]: `%${prio}%` } } : {}),
              },
              separate: true,
              order: [["order", "asc"]],
            },
            {
              model: TicketModel,
              where: {
                ...(text ? { title: { [Op.like]: `%${text}%` } } : {}),
                ...(prio ? { prio: { [Op.like]: `%${prio}%` } } : {}),
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
