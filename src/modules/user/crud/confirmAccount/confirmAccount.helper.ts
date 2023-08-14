import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { ConfirmAccountEnum } from "./confirmAccount.enum";

export const isConfirmed = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.OK),
  data: ConfirmAccountEnum.USER_CONFIRMED,
});

export const isDoesNotConfirmed = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: ConfirmAccountEnum.USER_DOES_NOT_CONFIRMED,
});
