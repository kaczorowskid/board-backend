import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Folder } from "../../types";
import { GetOneFolderEnum } from "./getOneFolder.enum";

export const folderExist = (data: Folder): DataResponse<Folder> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const folderDoesNotExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetOneFolderEnum.FOLDER_DOES_NOT_EXIST_IN_THE_DATABASE,
});
