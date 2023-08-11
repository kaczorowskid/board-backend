import { sequelizeWithError } from "../../../../database";
import { TableModel } from "../../../../models";
import {
  tableDoesNotExistInTheDatabase,
  tableExist,
} from "./getTablesWithPagination.helper";
import { GetTablesWithPaginationQuery } from "./getTablesWithPagination.type";

export const getTablesWithPaginationService = async ({
  skip,
  take,
  user_id,
  folder_id,
}: GetTablesWithPaginationQuery) => {
  return sequelizeWithError(async () => {
    const { count, rows: data } = await TableModel.findAndCountAll({
      offset: skip,
      limit: take,
      where: { user_id, ...(!!!folder_id ? "" : { folder_id }) },
    });

    if (data) {
      return tableExist({ count, data });
    } else {
      return tableDoesNotExistInTheDatabase();
    }
  });
};
