import { sequelizeWithError } from "../../../../database";
import { TableModel } from "../../../../models";
import { GetAllTablesQuery } from "./getAllTables.type";
import {
  tablesDoesNotExistInTheDatabase,
  tablesExist,
} from "./getAllTables.helper";

export const getAllTablesService = async ({ user_id }: GetAllTablesQuery) => {
  return sequelizeWithError(async () => {
    const tableData = await TableModel.findAll({
      where: { user_id },
    });

    if (tableData) {
      return tablesExist(tableData);
    } else {
      return tablesDoesNotExistInTheDatabase();
    }
  });
};
