import { Op, Sequelize } from "sequelize";
import { sequelizeWithError } from "../../../../database";
import { FolderModel } from "../../../../models";
import { TableModel } from "../../../../models";
import { paginationHelper, somethingWentWrong } from "../../../helpers";
import { GetFoldersWithPaginationQuery } from "./getFoldersWithPagination.type";
import {
  foldersDoesNotExistInTheDatabase,
  foldersExist,
} from "./getFoldersWithPagination.helper";

export const getFoldersWithPaginationService = async ({
  user_id,
  offset,
  limit,
  search_value: searchValue,
}: GetFoldersWithPaginationQuery) => {
  const [data, error] = await sequelizeWithError(async () => {
    const { count, rows: data } = await FolderModel.findAndCountAll({
      ...paginationHelper({ offset, limit, searchValue }, { user_id }),
      attributes: {
        include: [
          [
            Sequelize.literal(
              `(
                SELECT COUNT(*)
                FROM tables
                WHERE tables.folder_id = folders.id
              )`
            ),
            "tables_count",
          ],
        ],
      },
      include: [
        {
          model: TableModel,
          attributes: [],
        },
      ],
      group: ["folders.id"],
    });

    if (data) {
      return foldersExist({ count: count.length, data });
    } else {
      return foldersDoesNotExistInTheDatabase();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
