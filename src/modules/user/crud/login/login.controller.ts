import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { loginUserService } from "./login.service";
import { Login } from "./login.type";

export const login: ExpressMiddleware<unknown, Login> = async (req, res) => {
  try {
    const { getUserData, generateAccessToken } = await loginUserService(
      req.body
    );

    const userData = await getUserData();
    const accessToken = await generateAccessToken(userData);

    res
      .status(HTTPStatus.OK)
      .cookie("JWT", accessToken, {
        maxAge: 84600000,
        httpOnly: true,
      })
      .send(userData?.dataValues);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
