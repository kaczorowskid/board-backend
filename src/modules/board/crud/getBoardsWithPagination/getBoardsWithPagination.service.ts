import { sequelizeWithError } from "../../../../database";
import { BoardModel } from "../../../../models";
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
    const { count, rows: data } = await BoardModel.findAndCountAll({
      ...paginationHelper({ offset, limit, searchValue }, { user_id }),
    });

    if (data) {
      return boardsExist({ count, data });
    } else {
      return boardsDoesNotExistInTheDatabase();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
