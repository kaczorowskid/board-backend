import { Sequelize } from "sequelize";
import { sequelizeWithError } from "../../../../database";
import { FolderModel } from "../../../../models";
import { TableModel } from "../../../../models";
import {
  foldersDoesNotExistInTheDatabase,
  foldersExist,
} from "./getAllFolders.helper";
import { GetAllFoldersQuery } from "./getAllFolders.type";
import { somethingWentWrong } from "../../../helpers";

export const getAllFoldersService = async ({ user_id }: GetAllFoldersQuery) => {
  const [data, error] = await sequelizeWithError(async () => {
    const data = await FolderModel.findAll({
      where: { user_id },
      attributes: {
        include: [
          [Sequelize.fn("COUNT", Sequelize.col("tables.id")), "tables_count"],
        ],
      },
      include: [
        {
          model: TableModel,
          attributes: [],
        },
      ],
      group: ["folders.id"],
      order: [["name", "ASC"]],
    });

    if (data) {
      return foldersExist(data);
    } else {
      return foldersDoesNotExistInTheDatabase();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
