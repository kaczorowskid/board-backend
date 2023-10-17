import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { UpdatePasswordEnum } from "./updatePassword.enum";

export const passwordHasBeenUpdated = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.OK),
  data: UpdatePasswordEnum.PASSWORD_HAS_BEEN_UPDATED,
});

export const userDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: UpdatePasswordEnum.USER_DOES_NOT_EXIST,
});

export const wrongOldPassword = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: UpdatePasswordEnum.WRONG_OLD_PASSWORD,
});
