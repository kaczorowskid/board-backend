import { HTTPStatus } from "../../utils";
import { DataResponse } from "./dataResponse.type";
import { ErrorResponseEnum } from "./errorResponse.enum";

interface ErrorResponseType {
  code?: number;
  error?: string;
}

export const somethingWentWrong = ({
  code,
  error,
}: ErrorResponseType): DataResponse<string> => ({
  statusCode: code || Number(HTTPStatus.CONFLICT),
  data: error || ErrorResponseEnum.SOMETHING_WENT_WRONT,
});
