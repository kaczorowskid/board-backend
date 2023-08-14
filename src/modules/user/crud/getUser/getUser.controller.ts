import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getUserService } from "./getUser.service";

export const getUser: ExpressMiddleware = async (req, res) => {
  const data = await getUserService({
    id: req.header("user-token") as string,
  });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
