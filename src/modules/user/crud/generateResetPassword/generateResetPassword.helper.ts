import { HTTPStatus } from "../../../../utils";
import { UserResponse } from "../../types";
import { GenerateResetPasswordEnum } from "./generateResetPassword.enum";

export const passwordHasBeenReset = (): UserResponse => ({
  statusCode: Number(HTTPStatus.OK),
  data: GenerateResetPasswordEnum.PASSWORD_HAS_BEEN_RESET,
});

export const noEmailInTheDatabase = (): UserResponse => ({
  statusCode: Number(HTTPStatus.FORBIDDEN),
  data: GenerateResetPasswordEnum.NO_EMAIL_IN_THE_DATABASE,
});
