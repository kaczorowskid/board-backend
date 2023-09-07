import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Board, Column } from "../../types";

export const columnHasBeenCreated = (data: Column): DataResponse<Column> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});
