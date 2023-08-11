import { HTTPStatus } from "../../../../utils";
import { Table, TableResponse } from "../../types";
import { GetOneTableEnum } from "./getOneTable.enum";

export const tableExist = (data: Table): TableResponse<Table> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data,
});

export const tableDoesNotExistInTheDatabase = (): TableResponse<string> => ({
  statusCode: Number(HTTPStatus.UNAUTHORIZED),
  data: GetOneTableEnum.TABLE_DOES_NOT_EXIST_IN_THE_DATABASE,
});
