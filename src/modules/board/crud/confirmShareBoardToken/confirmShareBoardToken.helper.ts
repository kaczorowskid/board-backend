import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { ConfirmShareBoardTokenEnum } from "./confirmShareBoardToken.enum";

export const boardHasBeenShared = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data: ConfirmShareBoardTokenEnum.BOARD_HAS_BEEN_SHARED,
});

export const boardDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: ConfirmShareBoardTokenEnum.BOARD_DOES_NOT_EXIST,
});
