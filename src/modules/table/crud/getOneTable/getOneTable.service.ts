import { sequelizeWithError } from "../../../../database";
import { TableModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import {
  tableDoesNotExistInTheDatabase,
  tableExist,
} from "./getOneTable.helper";
import { GetOneTable, GetOneTableParams } from "./getOneTables.type";

export const getOneTableService = async ({
  id,
  user_id,
}: GetOneTableParams & GetOneTable) => {
  const [data, error] = await sequelizeWithError(async () => {
    const tableData = await TableModel.findOne({
      where: { user_id, id },
    });

    if (tableData) {
      return tableExist(tableData);
    } else {
      return tableDoesNotExistInTheDatabase();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
