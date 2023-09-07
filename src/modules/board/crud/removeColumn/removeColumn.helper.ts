import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { RemoveColumnEnum } from "./removeColumn.enum";

export const removedColumnSuccessfully = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.OK),
  data: RemoveColumnEnum.COLUMN_REMOVED_SUCCESSFULLY,
});

export const columnDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: RemoveColumnEnum.COLUMN_DOES_NOT_EXIST,
});
