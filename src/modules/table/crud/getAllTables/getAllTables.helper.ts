import { HTTPStatus } from "../../../../utils";
import { Table, TableResponse } from "../../types";
import { GetAllDataEnum } from "./getAllTables.enum";

export const tablesExist = (data: Table[]): TableResponse<Table[]> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data,
});

export const tablesDoesNotExistInTheDatabase = (): TableResponse<string> => ({
  statusCode: Number(HTTPStatus.UNAUTHORIZED),
  data: GetAllDataEnum.TABLES_DOES_NOT_EXIST_IN_THE_DATABASE,
});
