import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { registerUserService } from "./register.service";
import { RegisterUserRequest } from "../../../../contracts/user/user.type";

export const register: ExpressMiddleware<unknown, RegisterUserRequest> = async (
  req,
  res
) => {
  try {
    const { register } = await registerUserService(req.body);

    const result = await register();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
