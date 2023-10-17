import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { updatePasswordService } from "./updatePassword.service";
import { UpdatePassword, UpdatePasswordParams } from "./updatePassword.type";

export const updatePassword: ExpressMiddleware<
  UpdatePasswordParams,
  UpdatePassword
> = async (req, res) => {
  const data = await updatePasswordService({
    ...req.params,
    ...req.body,
  });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
