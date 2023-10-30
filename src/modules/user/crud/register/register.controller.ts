import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { registerUserService } from "./register.service";
import { RegisterUserRequest } from "../../../../contracts/user/user.type";
import { registerUserRequestSchema } from "../../../../contracts/user/user.schema";

export const register: ExpressMiddleware<unknown, RegisterUserRequest> = async (
  req,
  res
) => {
  try {
    const request = registerUserRequestSchema.parse(req.body);
    const { register } = await registerUserService(request);

    const result = await register();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
