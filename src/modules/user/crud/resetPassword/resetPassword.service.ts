import jwt from "jsonwebtoken";
import { mailer, MailType } from "../../../../utils";
import { UserModel } from "../../../../models";
import { ResetPasswordUserRequest } from "../../../../contracts/user/user.type";

export const resetPasswordService = async ({
  email,
}: ResetPasswordUserRequest) => {
  const resetPassword = async (): Promise<void> => {
    const user = await UserModel.findOne({ where: { email } });

    const resetPasswordToken = jwt.sign(
      { id: user?.id },
      process.env.ACCESS_KEY!,
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
