import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { User } from "../../types";
import { GetUserEnum } from "./getUser.enum";

export const getUserData = (data: User): DataResponse<User> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const userDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetUserEnum.USER_DOES_NOT_EXIST,
});
