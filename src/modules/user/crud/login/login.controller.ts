import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { loginUserService } from "./login.service";
import { Login } from "./login.type";

export const login: ExpressMiddleware<unknown, Login> = async (req, res) => {
  const data = await loginUserService(req.body);
  let token;

  if (typeof data?.data !== "string") {
    token = data?.data.token;
  }

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res
        .status(data.statusCode)
        .cookie("JWT", token, {
          maxAge: 84600000,
          httpOnly: true,
        })
        .json(data.data);
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
