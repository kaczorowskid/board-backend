import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { UpdateEnum } from "./updateUser.enum";

export const hasBeenUpdated = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.OK),
  data: UpdateEnum.HAS_BEEN_UPDATED,
});

export const userDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: UpdateEnum.USER_DOES_NOT_EXIST,
});
