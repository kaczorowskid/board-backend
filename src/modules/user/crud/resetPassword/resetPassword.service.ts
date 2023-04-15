import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sequelizeWithError } from "../../../../database";
import { UserModel } from "../../models";
import { User, UserResponse } from "../../types";
import { ResetPassword } from "./resetPassword.type";
import {
  newPasswordHasBeenSet,
  noUserInTheDatabase,
  wrongOldPassword,
} from "./resetPassword.helper";

export const resetPasswordService = async ({
  token,
  password,
  oldPassword,
}: ResetPassword): Promise<UserResponse> => {
  return sequelizeWithError<Promise<UserResponse>>(async () => {
    const userData = jwt.verify(token, process.env.RESET_PASSWORD_KEY!) as User;

    const user = await UserModel.findOne({
      where: { id: userData.id },
    });

    if (user) {
      const isFine = await bcrypt.compare(oldPassword, user.password);

      if (isFine) {
        const passwordHash: string = await bcrypt.hash(password, 10);

        await UserModel.update(
          { password: passwordHash },
          { where: { id: user.id } }
        );

        return newPasswordHasBeenSet();
      } else {
        return wrongOldPassword();
      }
    } else {
      return noUserInTheDatabase();
    }
  });
};
