import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sequelizeWithError } from "../../../../database";
import { UserModel } from "../../../../models";
import { User } from "../../types";
import { SetNewPassword } from "./setNewPassword.type";
import {
  newPasswordHasBeenSet,
  noUserInTheDatabase,
  wrongOldPassword,
} from "./setNewPassword.helper";
import { somethingWentWrong } from "../../../helpers";

export const setNewPasswordService = async ({
  token,
  password,
  oldPassword,
}: SetNewPassword) => {
  const [data, error] = await sequelizeWithError(async () => {
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

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
