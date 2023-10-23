import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { authorizationService } from "./authorization.service";

export const authorization: ExpressMiddleware = async (req, res) => {
  try {
    const { authorization } = await authorizationService({
      token: req.cookies["JWT"],
    });

    const result = await authorization();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
