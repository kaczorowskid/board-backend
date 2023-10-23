import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { updateUserService } from "./updateUser.service";
import { Update, UpdateParams } from "./updateUser.type";

export const updateUser: ExpressMiddleware<UpdateParams, Update> = async (
  req,
  res
) => {
  try {
    const { update } = await updateUserService({
      ...req.params,
      ...req.body,
    });

    const result = await update();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
