import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";

export const logout: ExpressMiddleware = async (req, res) => {
  res
    .clearCookie("JWT")
    .status(Number(HTTPStatus.OK))
    .json({ result: "logout" });
};
