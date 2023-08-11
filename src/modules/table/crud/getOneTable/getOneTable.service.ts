import { sequelizeWithError } from "../../../../database";
import { TableModel } from "../../../../models";
import { TableResponse } from "../../types";
import {
  tableDoesNotExistInTheDatabase,
  tableExist,
} from "./getOneTable.helper";
import { GetOneTable, GetOneTableParams } from "./getOneTables.type";

export const getOneTableService = async ({
  id,
  user_id,
}: GetOneTableParams & GetOneTable) => {
  return sequelizeWithError(async () => {
    const tableData = await TableModel.findOne({
      where: { user_id, id },
    });

    if (tableData) {
      return tableExist(tableData);
    } else {
      return tableDoesNotExistInTheDatabase();
    }
  });
};
