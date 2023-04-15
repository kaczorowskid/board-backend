import { HTTPStatus } from "../../../../utils";
import { User, UserResponse } from "../../types";
import { LoginEnum } from "./login.enum";
import { Token } from "./login.type";

export const isLogged = (data: User & Token): UserResponse<User & Token> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});

export const wrongPass = (): UserResponse<User & Token> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: LoginEnum.WRONG_PASS,
});

export const userDoesNotExist = (): UserResponse<User & Token> => ({
  statusCode: Number(HTTPStatus.UNAUTHORIZED),
  data: LoginEnum.USER_DOES_NOT_EXIST,
});
