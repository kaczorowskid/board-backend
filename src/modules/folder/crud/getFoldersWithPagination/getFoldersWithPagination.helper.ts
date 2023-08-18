import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { GetFoldersWithPaginationEnum } from "./getFoldersWithPagination.enum";
import { FoldersWithPagination } from "./getFoldersWithPagination.type";

export const foldersExist = (
  data: FoldersWithPagination
): DataResponse<FoldersWithPagination> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const foldersDoesNotExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetFoldersWithPaginationEnum.FOLDERS_DOES_NOT_EXIST_IN_THE_DATABASE,
});
