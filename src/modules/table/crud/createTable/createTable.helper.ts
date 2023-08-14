import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Table } from "../../types";
import { CreateTableEnum } from "./createTable.enum";

export const tableHasBeenCreated = (data: Table): DataResponse<Table> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});

export const tableExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: CreateTableEnum.TABLE_EXIST_IN_THE_DATABASE,
});
