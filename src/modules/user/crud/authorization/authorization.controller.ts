import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { authorizationService } from "./authorization.service";

export const authorization: ExpressMiddleware = async (req, res) => {
  const data = await authorizationService({ token: req.cookies["JWT"] });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
