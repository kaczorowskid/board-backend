import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getUserService } from "./getUser.service";
import { GetUserRequest } from "../../../../contracts/user/user.type";
import { getUserRequestSchema } from "../../../../contracts/user/user.schema";

export const getUser: ExpressMiddleware<GetUserRequest> = async (req, res) => {
  try {
    const request = getUserRequestSchema.parse(req.params);
    const { get } = await getUserService(request);

    const result = await get();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
