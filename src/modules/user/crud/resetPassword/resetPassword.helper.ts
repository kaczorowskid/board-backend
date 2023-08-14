import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { ResetPasswordEnum } from "./resetPassword.enum";

export const passwordHasBeenReset = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.OK),
  data: ResetPasswordEnum.PASSWORD_HAS_BEEN_RESET,
});

export const noEmailInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.FORBIDDEN),
  data: ResetPasswordEnum.NO_EMAIL_IN_THE_DATABASE,
});
