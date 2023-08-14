import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Folder } from "../../types";
import { CreateFolderEnum } from "./createFolder.enum";

export const folderHasBeenCreated = (data: Folder): DataResponse<Folder> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});

export const folderExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: CreateFolderEnum.FOLDER_EXIST_IN_THE_DATABASE,
});
