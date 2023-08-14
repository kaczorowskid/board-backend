import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { resetPasswordService } from "./resetPassword.service";
import { ResetPassword } from "./resetPassword.type";

export const resetPassword: ExpressMiddleware<unknown, ResetPassword> = async (
  req,
  res
) => {
  const data = await resetPasswordService(req.body);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
