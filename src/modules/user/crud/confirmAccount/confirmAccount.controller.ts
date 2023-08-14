import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { confirmAccountService } from "./confirmAccount.service";
import { ConfirmAccount } from "./confirmAccount.type";

export const confirmAccount: ExpressMiddleware<ConfirmAccount> = async (
  req,
  res
) => {
  const data = await confirmAccountService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
