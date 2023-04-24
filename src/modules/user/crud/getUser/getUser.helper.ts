import { HTTPStatus } from "../../../../utils";
import { User, UserResponse } from "../../types";
import { GetUserEnum } from "./getUser.enum";

export const getUserData = (data: User): UserResponse => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const userDoesNotExist = (): UserResponse => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: GetUserEnum.USER_DOES_NOT_EXIST,
});
