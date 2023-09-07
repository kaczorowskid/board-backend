import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { GetBoardsWithPaginationEnum } from "./getBoardsWithPagination.enum";
import { BoardsWithPagination } from "./getBoardsWithPagination.type";

export const boardsExist = (
  data: BoardsWithPagination
): DataResponse<BoardsWithPagination> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const boardsDoesNotExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetBoardsWithPaginationEnum.BOARDS_DOES_NOT_EXIST_IN_THE_DATABASE,
});
