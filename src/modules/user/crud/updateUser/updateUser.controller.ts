import { ExpressMiddleware } from "../../../../types";
import { updateUserService } from "./updateUser.service";
import { Update, UpdateParams } from "./updateUser.type";

export const updateUser: ExpressMiddleware<UpdateParams, Update> = async (
  req,
  res
) => {
  const { statusCode, data } = await updateUserService({
    ...req.params,
    ...req.body,
  });

  if (data) {
    res.status(statusCode).json(data);
  }
};
