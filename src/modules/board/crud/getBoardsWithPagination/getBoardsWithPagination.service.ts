import { sequelizeWithError } from "../../../../database";
import { BoardModel, UserModel } from "../../../../models";
import { paginationHelper, somethingWentWrong } from "../../../helpers";
import { GetBoardsWithPaginationQuery } from "./getBoardsWithPagination.type";
import {
  boardsDoesNotExistInTheDatabase,
  boardsExist,
} from "./getBoardsWithPagination.helper";

export const getBoardsWithPaginationService = async ({
  offset,
  limit,
  search_value: searchValue,
  user_id,
}: GetBoardsWithPaginationQuery) => {
  const [data, error] = await sequelizeWithError(async () => {
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

    const { count, rows: data } = await BoardModel.findAndCountAll({
      ...paginationHelper({ offset, limit, searchValue }, { id: boardsIds }),
      order: [["updated_at", "DESC"]],
    });

    if (data) {
      return boardsExist({
        count,
        data,
      });
    } else {
      return boardsDoesNotExistInTheDatabase();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
