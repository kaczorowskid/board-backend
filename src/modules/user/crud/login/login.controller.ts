import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { loginUserService } from "./login.service";
import { Login } from "./login.type";

export const login: ExpressMiddleware<unknown, Login> = async (req, res) => {
  const data = await loginUserService(req.body);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
