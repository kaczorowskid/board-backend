import jwt from "jsonwebtoken";
import { mailer, MailType } from "../../../../utils";
import { UserModel } from "../../../../models";
import { ResetPassword } from "./resetPassword.type";

export const resetPasswordService = async ({ email }: ResetPassword) => {
  const resetPassword = async (): Promise<void> => {
    const user = await UserModel.findOne({ where: { email } });

    const resetPasswordToken = jwt.sign(
      { id: user?.id },
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
  };

  return {
    resetPassword,
  };
};
