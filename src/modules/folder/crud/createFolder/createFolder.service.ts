import { v4 as uuidv4 } from "uuid";
import { sequelizeWithError } from "../../../../database";
import { CreateFolder } from "./createFolder.type";
import { FolderModel } from "../../../../models";
import {
  folderExistInTheDatabase,
  folderHasBeenCreated,
} from "./createFolder.helper";
import { somethingWentWrong } from "../../../helpers";

export const createFolderService = async ({
  name,
  description,
  user_id,
}: CreateFolder) => {
  const [data, error] = await sequelizeWithError(async () => {
    const isFolderExist = await FolderModel.count({ where: { name } });

    if (!isFolderExist) {
      const folder = await FolderModel.create({
        id: uuidv4(),
        name,
        description,
        user_id,
      });

      return folderHasBeenCreated(folder);
    } else {
      return folderExistInTheDatabase();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
