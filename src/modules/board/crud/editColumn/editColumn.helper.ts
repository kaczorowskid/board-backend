import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { EditColumnEnum } from "./editColumn.enum";

export const columnHasBeenEdited = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data: EditColumnEnum.COLUMN_HAS_BEEN_EDITED,
});
