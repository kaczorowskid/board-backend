import { ExpressMiddleware } from "../../../../types";
import { generateResetPasswordService } from "./generateResetPassword.service";
import { GenerateResetPassword } from "./generateRestPassword.type";

export const generateResetPassword: ExpressMiddleware<
  unknown,
  GenerateResetPassword
> = async (req, res) => {
  const { statusCode, data } = await generateResetPasswordService(req.body);

  if (data) {
    res.status(statusCode).json(data);
  }
};
