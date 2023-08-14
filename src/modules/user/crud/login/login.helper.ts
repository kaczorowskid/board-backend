import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { User } from "../../types";
import { LoginEnum } from "./login.enum";
import { Token } from "./login.type";

export const isLogged = (data: User & Token): DataResponse<User & Token> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});

export const wrongPass = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: LoginEnum.WRONG_PASS,
});

export const userDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.UNAUTHORIZED),
  data: LoginEnum.USER_DOES_NOT_EXIST,
});
