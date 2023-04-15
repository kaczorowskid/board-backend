import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { sequelizeWithError } from "../../../../database";
import { mailer, MailType } from "../../../../utils";
import { UserModel } from "../../models";
import { UserResponse } from "../../types";
import { userHasBeenRegister, userExistInTheDatabase } from "./register.helper";
import { Register } from "./register.type";

export const registerUserService = async ({
  email,
  password,
  name,
}: Register): Promise<UserResponse> => {
  return sequelizeWithError<Promise<UserResponse>>(async () => {
    const isUserExist = await UserModel.count({ where: { email } });

    if (!isUserExist) {
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await UserModel.create({
        id: uuidv4(),
        email,
        password: passwordHash,
        name,
        is_active: false,
      });

      mailer({
        type: MailType.CONFIRM,
        token: jwt.sign({ id: user.id }, process.env.EMAIL_KEY!, {
          expiresIn: "1d",
        }),
        to: email,
      });

      return userHasBeenRegister(user);
    } else {
      return userExistInTheDatabase();
    }
  });
};
