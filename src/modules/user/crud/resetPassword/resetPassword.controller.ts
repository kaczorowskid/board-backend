import { json } from "sequelize";
import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { resetPasswordService } from "./resetPassword.service";
import { ResetPassword } from "./resetPassword.type";
import { ResetPasswordEnum } from "./resetPassword.enum";

export const resetPassword: ExpressMiddleware<unknown, ResetPassword> = async (
  req,
  res
) => {
  try {
    const { resetPassword } = await resetPasswordService(req.body);

    await resetPassword();
    res
      .status(HTTPStatus.OK)
      .json({ result: ResetPasswordEnum.PASSWORD_HAS_BEEN_RESET });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
