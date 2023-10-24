import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { getUserService } from "./getUser.service";
import { GetUserRequest } from "../../../../contracts/user/user.type";

export const getUser: ExpressMiddleware<GetUserRequest> = async (req, res) => {
  try {
    const { get } = await getUserService(req.params);

    const result = await get();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
