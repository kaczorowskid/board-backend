import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { updateUserService } from "./updateUser.service";
import { Update, UpdateParams } from "./updateUser.type";
import { updateUserRequestSchema } from "../../../../contracts/user/user.schema";

export const updateUser: ExpressMiddleware<UpdateParams, Update> = async (
  req,
  res
) => {
  try {
    const request = updateUserRequestSchema.parse({
      ...req.params,
      ...req.body,
    });
    const { update } = await updateUserService(request);

    const result = await update();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
