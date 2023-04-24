import { HTTPStatus } from "../../../../utils";
import { UserResponse } from "../../types";
import { ConfirmAccountEnum } from "./confirmAccount.enum";

export const isConfirmed = (): UserResponse => ({
  statusCode: Number(HTTPStatus.OK),
  data: ConfirmAccountEnum.USER_CONFIRMED,
});

export const isDoesNotConfirmed = (): UserResponse => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: ConfirmAccountEnum.USER_DOES_NOT_CONFIRMED,
});
