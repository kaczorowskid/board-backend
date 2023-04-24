import { ExpressMiddleware } from "../../../../types";
import { resetPasswordService } from "./resetPassword.service";
import { ResetPassword } from "./resetPassword.type";

export const resetPassword: ExpressMiddleware<unknown, ResetPassword> = async (
  req,
  res
) => {
  const { statusCode, data } = await resetPasswordService(req.body);

  if (data) {
    res.status(statusCode).json(data);
  }
};
