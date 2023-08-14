import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { SetNewPassworddEnum } from "./setNewPassword.enum";

export const noUserInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: SetNewPassworddEnum.NO_USER_IN_THE_DATABASE,
});

export const newPasswordHasBeenSet = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.OK),
  data: SetNewPassworddEnum.NEW_PASSWORD_HAS_BEEN_SET,
});

export const wrongOldPassword = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: SetNewPassworddEnum.WRONG_OLD_PASSWORD,
});
