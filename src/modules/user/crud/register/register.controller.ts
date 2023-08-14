import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { registerUserService } from "./register.service";
import { Register } from "./register.type";

export const register: ExpressMiddleware<unknown, Register> = async (
  req,
  res
) => {
  const data = await registerUserService(req.body);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
