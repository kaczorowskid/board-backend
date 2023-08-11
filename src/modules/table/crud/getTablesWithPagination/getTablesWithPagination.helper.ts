import { HTTPStatus } from "../../../../utils";
import { TableResponse } from "../../types";
import { GetTablesWithPaginationEnum } from "./getTablesWithPagination.enum";
import { TablesWithPagination } from "./getTablesWithPagination.type";

export const tableExist = (
  data: TablesWithPagination
): TableResponse<TablesWithPagination> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const tableDoesNotExistInTheDatabase = (): TableResponse<string> => ({
  statusCode: Number(HTTPStatus.UNAUTHORIZED),
  data: GetTablesWithPaginationEnum.TABLE_DOES_NOT_EXIST_IN_THE_DATABASE,
});
