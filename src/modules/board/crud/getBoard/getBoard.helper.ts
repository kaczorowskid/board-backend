import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Board } from "../../types";
import { GetBoardEnum } from "./getBoard.enum";

export const getBoardData = (data: Board): DataResponse<Board> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const boardDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetBoardEnum.BOARD_DOES_NOT_EXIST,
});
