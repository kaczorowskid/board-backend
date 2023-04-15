import jwt from "jsonwebtoken";
import { sequelizeWithError } from "../../../../database";
import { mailer, MailType } from "../../../../utils";
import { UserModel } from "../../models";
import { UserResponse } from "../../types";
import {
  noEmailInTheDatabase,
  passwordHasBeenReset,
} from "./generateResetPassword.helper";
import { GenerateResetPassword } from "./generateRestPassword.type";

export const generateResetPasswordService = async ({
  email,
}: GenerateResetPassword): Promise<UserResponse> => {
  return sequelizeWithError<Promise<UserResponse>>(async () => {
    const user = await UserModel.findOne({ where: { email } });

    if (user) {
      const resetPasswordToken = jwt.sign(
        { id: user.id },
        process.env.RESET_PASSWORD_KEY!,
        {
          expiresIn: "1d",
        }
      );
      mailer({
        type: MailType.RESET,
        token: resetPasswordToken,
        to: email,
      });
      return passwordHasBeenReset();
    } else {
      return noEmailInTheDatabase();
    }
  });
};
