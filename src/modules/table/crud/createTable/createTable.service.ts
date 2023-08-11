import { v4 as uuidv4 } from "uuid";
import { sequelizeWithError } from "../../../../database";
import { CreateTable, CreateTableParams } from "./createTable.type";
import { TableModel } from "../../../../models";
import {
  tableExistInTheDatabase,
  tableHasBeenCreated,
} from "./createTable.helper";

export const createTableService = async ({
  name,
  description,
  favorite,
  team,
  user_id,
  folder_id,
}: CreateTableParams & CreateTable) => {
  return sequelizeWithError(async () => {
    const isTableExist = await TableModel.count({ where: { name } });

    if (!isTableExist) {
      const table = await TableModel.create({
        id: uuidv4(),
        name,
        image: "https://thispersondoesnotexist.com/",
        description,
        favorite,
        team,
        user_id,
        folder_id,
      });

      return tableHasBeenCreated(table);
    } else {
      return tableExistInTheDatabase();
    }
  });
};
