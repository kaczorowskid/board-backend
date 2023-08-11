import { HTTPStatus } from "../../../../utils";
import { Folder, FolderResponse } from "../../types";
import { CreateFolderEnum } from "./createFolder.enum";

export const folderHasBeenCreated = (data: Folder): FolderResponse<Folder> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});

export const folderExistInTheDatabase = (): FolderResponse<string> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: CreateFolderEnum.FOLDER_EXIST_IN_THE_DATABASE,
});
