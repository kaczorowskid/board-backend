import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { GetTablesWithPaginationEnum } from "./getTablesWithPagination.enum";
import { TablesWithPagination } from "./getTablesWithPagination.type";

export const tableExist = (
  data: TablesWithPagination
): DataResponse<TablesWithPagination> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const tableDoesNotExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetTablesWithPaginationEnum.TABLE_DOES_NOT_EXIST_IN_THE_DATABASE,
});
