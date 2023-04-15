import { HTTPStatus } from "../../../../utils";
import { UserResponse } from "../../types";
import { ResetPasswordEnum } from "./resetPassword.enum";

export const noUserInTheDatabase = (): UserResponse => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: ResetPasswordEnum.NO_USER_IN_THE_DATABASE,
});

export const newPasswordHasBeenSet = (): UserResponse => ({
  statusCode: Number(HTTPStatus.CREATED),
  data: ResetPasswordEnum.NEW_PASSWORD_HAS_BEEN_SET,
});

export const wrongOldPassword = (): UserResponse => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: ResetPasswordEnum.WRONG_OLD_PASSWORD,
});
