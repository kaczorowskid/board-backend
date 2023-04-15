import { HTTPStatus } from "../../../../utils";
import { UserResponse } from "../../types";
import { UpdateEnum } from "./updateUser.enum";

export const hasBeenUpdated = (): UserResponse => ({
  statusCode: Number(HTTPStatus.CREATED),
  data: UpdateEnum.HAS_BEEN_UPDATED,
});

export const userDoesNotExist = (): UserResponse => ({
  statusCode: Number(HTTPStatus.UNAUTHORIZED),
  data: UpdateEnum.USER_DOES_NOT_EXIST,
});
