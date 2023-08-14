import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Table } from "../../types";
import { GetOneTableEnum } from "./getOneTable.enum";

export const tableExist = (data: Table): DataResponse<Table> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const tableDoesNotExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetOneTableEnum.TABLE_DOES_NOT_EXIST_IN_THE_DATABASE,
});
