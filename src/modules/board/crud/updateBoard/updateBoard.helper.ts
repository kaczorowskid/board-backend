import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Board } from "../../types";
import { UpdateBoardEnum } from "./updateBoard.enum";

export const updateBoardSuccessfully = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.OK),
  data: UpdateBoardEnum.BOARD_UPDATED_SUCCESSFULLY,
});

export const boardDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: UpdateBoardEnum.BOARD_DOES_NOT_EXIST,
});
