import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { RemoveBoardEnum } from "./removeBoard.enum";

export const boardHasBeenRemoved = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data: RemoveBoardEnum.BOARD_HAS_BEEN_REMOVED,
});
