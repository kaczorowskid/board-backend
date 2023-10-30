import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { authorizationService } from "./authorization.service";
import { authorizeUserRequestSchema } from "../../../../contracts/user/user.schema";

export const authorization: ExpressMiddleware = async (req, res) => {
  try {
    const request = authorizeUserRequestSchema.parse({
      token: req.cookies["JWT"],
    });
    const { authorization } = await authorizationService(request);

    const result = await authorization();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
