import { sequelizeWithError } from "../../../../database";
import { TableModel } from "../../../../models";
import { GetAllTablesQuery } from "./getAllTables.type";
import {
  tablesDoesNotExistInTheDatabase,
  tablesExist,
} from "./getAllTables.helper";
import { somethingWentWrong } from "../../../helpers";

export const getAllTablesService = async ({ user_id }: GetAllTablesQuery) => {
  const [data, error] = await sequelizeWithError(async () => {
    const tableData = await TableModel.findAll({
      where: { user_id },
    });

    if (tableData) {
      return tablesExist(tableData);
    } else {
      return tablesDoesNotExistInTheDatabase();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
