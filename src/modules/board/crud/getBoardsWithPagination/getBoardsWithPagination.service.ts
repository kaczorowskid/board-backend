import { BoardModel, UserModel } from "../../../../models";
import { GetBoardsWithPaginationRequest } from "../../../../contracts/board/board.type";
import { Op } from "sequelize";

interface GetBoardsWithPaginationService {
  get: () => Promise<{
    count: number;
    rows: BoardModel[];
  }>;
}

export const getBoardsWithPaginationService = async ({
  offset,
  limit,
  search_value: searchValue,
  user_id,
}: GetBoardsWithPaginationRequest): Promise<GetBoardsWithPaginationService> => {
  const get = async (): Promise<{
    count: number;
    rows: BoardModel[];
  }> => {
    const userBoards = await UserModel.findOne({
      where: {
        id: user_id,
      },
      include: [
        {
          model: BoardModel,
          as: "usersRel",
        },
      ],
    });

    const boardsIds = (userBoards as any).usersRel.map(
      (board: any) => board.sharedBoards.board_id
    );

    const { count, rows } = await BoardModel.findAndCountAll({
      order: [["updated_at", "DESC"]],
      limit: limit || 5,
      offset: offset || 0,
      where: {
        id: boardsIds,
        ...(searchValue
          ? {
              name: {
                [Op.like]: `%${searchValue}%`,
              },
            }
          : {}),
      },
    });

    return { count, rows };
  };

  return {
    get,
  };
};
