import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { registerUserService } from "./register.service";
import { Register } from "./register.type";

export const register: ExpressMiddleware<unknown, Register> = async (
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
