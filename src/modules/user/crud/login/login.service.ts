import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../../../../models";
import { Login } from "./login.type";

interface LoginUserService {
  getUserData: () => Promise<UserModel | null>;
  generateAccessToken: (userData: UserModel | null) => Promise<string>;
}

export const loginUserService = async ({
  email,
  password,
}: Login): Promise<LoginUserService> => {
  const getUserData = async (): Promise<UserModel | null> => {
    const data = await UserModel.findOne({
      where: { email },
    });

    const isCorrectPassword = await bcrypt.compare(
      password,
      (data as UserModel).password
    );

    return isCorrectPassword ? data : null;
  };

  const generateAccessToken = async (userData: UserModel | null) => {
    const accessToken = jwt.sign(
      { id: userData?.id },
      process.env.ACCESS_KEY!,
      {
        expiresIn: "2h",
      }
    );

    return accessToken;
  };

  return {
    getUserData,
    generateAccessToken,
  };
};
