import jwt from "jsonwebtoken";
import { sequelizeWithError } from "../../../../database";
import { mailer, MailType } from "../../../../utils";
import { UserModel } from "../../../../models";
import { ResetPassword } from "./resetPassword.type";
import {
  noEmailInTheDatabase,
  passwordHasBeenReset,
} from "./resetPassword.helper";
import { somethingWentWrong } from "../../../helpers";

export const resetPasswordService = async ({ email }: ResetPassword) => {
  const [data, error] = await sequelizeWithError(async () => {
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

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
