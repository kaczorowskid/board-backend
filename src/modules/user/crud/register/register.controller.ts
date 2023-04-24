import { ExpressMiddleware } from "../../../../types";
import { registerUserService } from "./register.service";
import { Register } from "./register.type";

export const register: ExpressMiddleware<unknown, Register> = async (
  req,
  res
) => {
  const { statusCode, data } = await registerUserService(req.body);

  if (data) {
    res.status(statusCode).json(data);
  }
};
