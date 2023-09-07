import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Board } from "../../types";

export const boardHasBeenCreated = (data: Board): DataResponse<Board> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});
