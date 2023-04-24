import { HTTPStatus } from "../../../../utils";
import { User, UserResponse } from "../../types";
import { RegisterEnum } from "./register.enum";

export const userHasBeenRegister = (data: User): UserResponse => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});

export const userExistInTheDatabase = (): UserResponse => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: RegisterEnum.USER_EXIST_IN_THE_DATABASE,
});
