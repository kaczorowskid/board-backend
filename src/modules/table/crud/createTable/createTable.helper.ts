import { HTTPStatus } from "../../../../utils";
import { Table, TableResponse } from "../../types";
import { CreateTableEnum } from "./createTable.enum";

export const tableHasBeenCreated = (data: Table): TableResponse<Table> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});

export const tableExistInTheDatabase = (): TableResponse<string> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: CreateTableEnum.TABLE_EXIST_IN_THE_DATABASE,
});
