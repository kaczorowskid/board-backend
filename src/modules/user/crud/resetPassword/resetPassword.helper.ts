import { HTTPStatus } from "../../../../utils";
import { UserResponse } from "../../types";
import { ResetPasswordEnum } from "./resetPassword.enum";

export const passwordHasBeenReset = (): UserResponse => ({
  statusCode: Number(HTTPStatus.OK),
  data: ResetPasswordEnum.PASSWORD_HAS_BEEN_RESET,
});

export const noEmailInTheDatabase = (): UserResponse => ({
  statusCode: Number(HTTPStatus.FORBIDDEN),
  data: ResetPasswordEnum.NO_EMAIL_IN_THE_DATABASE,
});
