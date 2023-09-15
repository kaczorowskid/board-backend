import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Column } from "../../types";
import { GetColumnEnum } from "./getColumn.enum";

export const getColumnData = (data: Column): DataResponse<Column> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const columnDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetColumnEnum.COLUMN_DOES_NOT_EXIST,
});
