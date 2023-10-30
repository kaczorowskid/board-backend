import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { confirmAccountService } from "./confirmAccount.service";
import { ConfirmAccountUserRequest } from "../../../../contracts/user/user.type";
import { confirmAccountUserRequestSchema } from "../../../../contracts/user/user.schema";

export const confirmAccount: ExpressMiddleware<
  ConfirmAccountUserRequest
> = async (req, res) => {
  try {
    const request = confirmAccountUserRequestSchema.parse(req.params);
    const { confirm } = await confirmAccountService(request);

    const result = await confirm();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
