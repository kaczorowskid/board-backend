import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sequelizeWithError } from "../../../../database";
import { UserModel } from "../../../../models";
import { userDoesNotExist, isLogged, wrongPass } from "./login.helper";
import { Login } from "./login.type";
import { somethingWentWrong } from "../../../helpers";

export const loginUserService = async ({ email, password }: Login) => {
  const [data, error] = await sequelizeWithError(async () => {
    const userData = await UserModel.findOne({
      where: { email },
    });
    if (userData) {
      const passwordHash = await bcrypt.compare(password, userData.password);
      const accessToken = jwt.sign(
        { id: userData.id },
        process.env.EMAIL_KEY!,
        { expiresIn: "2h" }
      );
      return passwordHash
        ? isLogged({ ...userData.dataValues, token: accessToken })
        : wrongPass();
    } else {
      return userDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
