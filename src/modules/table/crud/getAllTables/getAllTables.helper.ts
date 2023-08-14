import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Table } from "../../types";
import { GetAllDataEnum } from "./getAllTables.enum";

export const tablesExist = (data: Table[]): DataResponse<Table[]> => ({
  statusCode: Number(HTTPStatus.OK),
  data: data || [],
});

export const tablesDoesNotExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetAllDataEnum.TABLES_DOES_NOT_EXIST_IN_THE_DATABASE,
});
