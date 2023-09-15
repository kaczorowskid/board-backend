import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { EditBoardEnum } from "./editBoard.enum";

export const boardHasBeenEdited = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data: EditBoardEnum.BOARD_HAS_BEEN_EDITED,
});
