import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Folder } from "../../types";
import { GetAllFoldersEnum } from "./getAllFolders.enum";

export const foldersExist = (data: Folder[]): DataResponse<Folder[]> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const foldersDoesNotExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.UNAUTHORIZED),
  data: GetAllFoldersEnum.FOLDERS_DOES_NOT_EXIST_IN_THE_DATABASE,
});
