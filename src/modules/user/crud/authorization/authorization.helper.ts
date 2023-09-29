import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { User } from "../../types";
import { AuthorizationEnum } from "./authorization.enum";

export const userAuthorized = (data: User): DataResponse<User> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const cookieRequired = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: AuthorizationEnum.COOKIE_REQUIRED,
});

export const userDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: AuthorizationEnum.USER_DOES_NOT_EXIST,
});
