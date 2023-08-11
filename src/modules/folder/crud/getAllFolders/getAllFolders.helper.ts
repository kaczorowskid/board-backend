import { HTTPStatus } from "../../../../utils";
import { Folder, FolderResponse } from "../../types";
import { GetAllFoldersEnum } from "./getAllFolders.enum";

export const foldersExist = (data: Folder[]): FolderResponse<Folder[]> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const foldersDoesNotExistInTheDatabase = (): FolderResponse<string> => ({
  statusCode: Number(HTTPStatus.UNAUTHORIZED),
  data: GetAllFoldersEnum.FOLDERS_DOES_NOT_EXIST_IN_THE_DATABASE,
});
