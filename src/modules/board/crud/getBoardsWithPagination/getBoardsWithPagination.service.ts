import { BoardModel, UserModel } from "../../../../models";
import { paginationHelper } from "../../../helpers";
import { GetBoardsWithPaginationRequest } from "../../../../contracts/board/board.type";

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
      ...paginationHelper({ offset, limit, searchValue }, { id: boardsIds }),
      order: [["updated_at", "DESC"]],
    });

    return { count, rows };
  };

  return {
    get,
  };
};
