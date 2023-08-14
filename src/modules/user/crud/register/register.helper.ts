import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { User } from "../../types";
import { RegisterEnum } from "./register.enum";

export const userHasBeenRegister = (data: User): DataResponse<User> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});

export const userExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: RegisterEnum.USER_EXIST_IN_THE_DATABASE,
});
