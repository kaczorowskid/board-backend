import { ExpressMiddleware } from "../../../../types";
import { loginUserService } from "./login.service";
import { Login } from "./login.type";

export const login: ExpressMiddleware<unknown, Login> = async (req, res) => {
  const { statusCode, data } = await loginUserService(req.body);

  if (data) {
    res.status(statusCode).json(data);
  }
};
