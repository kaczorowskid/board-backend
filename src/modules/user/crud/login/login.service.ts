import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sequelizeWithError } from "../../../../database";
import { UserModel } from "../../../../models";
import { User, UserResponse } from "../../types";
import { userDoesNotExist, isLogged, wrongPass } from "./login.helper";
import { Login, Token } from "./login.type";

export const loginUserService = async ({
  email,
  password,
}: Login): Promise<UserResponse<User & Token>> => {
  return sequelizeWithError<Promise<UserResponse<User & Token>>>(async () => {
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
        ? isLogged({ ...userData, token: accessToken })
        : wrongPass();
    } else {
      return userDoesNotExist();
    }
  });
};
