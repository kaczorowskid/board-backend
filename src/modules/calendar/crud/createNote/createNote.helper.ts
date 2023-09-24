import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Calendar } from "../../types";

export const noteHasBeenCreated = (data: Calendar): DataResponse<Calendar> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});
