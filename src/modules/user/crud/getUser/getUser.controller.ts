import { ExpressMiddleware } from "../../../../types";
import { getUserService } from "./getUser.service";

export const getUser: ExpressMiddleware = async (req, res) => {
  console.log("id ", req.header("user-token"));
  const { statusCode, data } = await getUserService({
    id: req.header("user-token") as string,
  });

  if (data) {
    res.status(statusCode).json(data);
  }
};
