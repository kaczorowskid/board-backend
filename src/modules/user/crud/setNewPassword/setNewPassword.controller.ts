import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { setNewPasswordService } from "./setNewPassword.service";
import { SetNewPassword } from "./setNewPassword.type";

export const setNewPassword: ExpressMiddleware<
  unknown,
  SetNewPassword
> = async (req, res) => {
  const data = await setNewPasswordService(req.body);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
