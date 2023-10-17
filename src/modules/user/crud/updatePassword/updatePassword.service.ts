import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { UserModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import {
  passwordHasBeenUpdated,
  userDoesNotExist,
  wrongOldPassword,
} from "./updatePassword.helper";
import { UpdatePassword, UpdatePasswordParams } from "./updatePassword.type";
import bcrypt from "bcrypt";

export const updatePasswordService = async ({
  id,
  old_password,
  new_password,
}: UpdatePasswordParams & UpdatePassword) => {
  const [data, error] = await sequelizeWithError(async () => {
    const user = await UserModel.findOne({ where: { id } });

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        old_password,
        user.password
      );

      if (isPasswordCorrect) {
        const passwordHash = await bcrypt.hash(new_password, 10);
        await UserModel.update({ password: passwordHash }, { where: { id } });
        return passwordHasBeenUpdated();
      } else {
        return wrongOldPassword();
      }
    } else {
      return userDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
