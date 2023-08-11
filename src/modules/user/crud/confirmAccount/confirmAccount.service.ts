import jwt from "jsonwebtoken";
import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { UserModel } from "../../../../models";
import { User, UserResponse } from "../../types";
import { isConfirmed, isDoesNotConfirmed } from "./confirmAccount.helper";
import { ConfirmAccount } from "./confirmAccount.type";

export const confirmAccountService = async ({
  token,
}: ConfirmAccount): Promise<UserResponse> => {
  return sequelizeWithError<Promise<UserResponse>>(async () => {
    const userId = jwt.verify(token, process.env.EMAIL_KEY!) as User;

    if (userId) {
      await UserModel.update({ is_active: true }, { where: { id: userId.id } });
      return isConfirmed();
    } else {
      return isDoesNotConfirmed();
    }
  });
};
