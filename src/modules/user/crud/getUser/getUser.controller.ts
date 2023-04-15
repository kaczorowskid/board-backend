import { ExpressMiddleware } from "../../../../types";
import { getUserService } from "./getUser.service";
import { GetUser } from "./GetUser.types";

export const getUser: ExpressMiddleware<GetUser> = async (req, res) => {
  const { statusCode, data } = await getUserService(req.params);

  if (data) {
    res.status(statusCode).json(data);
  }
};
