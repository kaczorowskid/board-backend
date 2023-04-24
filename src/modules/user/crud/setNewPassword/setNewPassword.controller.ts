import { ExpressMiddleware } from "../../../../types";
import { setNewPasswordService } from "./setNewPassword.service";
import { SetNewPassword } from "./setNewPassword.type";

export const setNewPassword: ExpressMiddleware<
  unknown,
  SetNewPassword
> = async (req, res) => {
  const { statusCode, data } = await setNewPasswordService(req.body);

  if (data) {
    res.status(statusCode).json(data);
  }
};
