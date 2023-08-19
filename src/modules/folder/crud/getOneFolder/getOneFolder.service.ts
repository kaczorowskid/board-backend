import { sequelizeWithError } from "../../../../database";
import { FolderModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import {
  folderDoesNotExistInTheDatabase,
  folderExist,
} from "./getOneFolder.helper";
import { GetOneFolderParams } from "./getOneFolder.type";

export const getOneFolderService = async ({ id }: GetOneFolderParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const folderData = await FolderModel.findOne({
      where: { id },
    });

    if (folderData) {
      return folderExist(folderData);
    } else {
      return folderDoesNotExistInTheDatabase();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
