import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Folder } from "../../types";
import { GetFoldersWithPaginationEnum } from "./getFoldersWithPagination.enum";

export const foldersExist = (data: Folder[]): DataResponse<Folder[]> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const foldersDoesNotExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetFoldersWithPaginationEnum.FOLDERS_DOES_NOT_EXIST_IN_THE_DATABASE,
});
