import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { CreateShareBoardTokenEnum } from "./createShareBoardToken.enum";

export const tokenHasBeenCreated = (data: string): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});

export const boardDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: CreateShareBoardTokenEnum.BOARD_DOES_NOT_EXIST,
});
