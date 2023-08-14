import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { updateUserService } from "./updateUser.service";
import { Update, UpdateParams } from "./updateUser.type";

export const updateUser: ExpressMiddleware<UpdateParams, Update> = async (
  req,
  res
) => {
  const data = await updateUserService({
    ...req.params,
    ...req.body,
  });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
