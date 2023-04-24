import { HTTPStatus } from "../../../../utils";
import { UserResponse } from "../../types";
import { SetNewPassworddEnum } from "./setNewPassword.enum";

export const noUserInTheDatabase = (): UserResponse => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: SetNewPassworddEnum.NO_USER_IN_THE_DATABASE,
});

export const newPasswordHasBeenSet = (): UserResponse => ({
  statusCode: Number(HTTPStatus.CREATED),
  data: SetNewPassworddEnum.NEW_PASSWORD_HAS_BEEN_SET,
});

export const wrongOldPassword = (): UserResponse => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: SetNewPassworddEnum.WRONG_OLD_PASSWORD,
});
