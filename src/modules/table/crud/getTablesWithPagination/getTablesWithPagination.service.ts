import { Op, where } from "sequelize";
import { sequelizeWithError } from "../../../../database";
import { TableModel } from "../../../../models";
import {
  tableDoesNotExistInTheDatabase,
  tableExist,
} from "./getTablesWithPagination.helper";
import { GetTablesWithPaginationQuery } from "./getTablesWithPagination.type";
import { paginationHelper, somethingWentWrong } from "../../../helpers";

export const getTablesWithPaginationService = async ({
  offset,
  limit,
  search_value: searchValue,
  user_id,
  folder_id,
}: GetTablesWithPaginationQuery) => {
  const [data, error] = await sequelizeWithError(async () => {
    const { count, rows: data } = await TableModel.findAndCountAll({
      ...paginationHelper(
        { offset, limit, searchValue },
        { user_id, ...(folder_id ? { folder_id } : {}) }
      ),
    });

    if (data) {
      return tableExist({ count, data });
    } else {
      return tableDoesNotExistInTheDatabase();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
