import { ExpressMiddleware } from "../../../../types";
import { confirmAccountService } from "./confirmAccount.service";
import { ConfirmAccount } from "./confirmAccount.type";

export const confirmAccount: ExpressMiddleware<ConfirmAccount> = async (
  req,
  res
) => {
  const { statusCode, data } = await confirmAccountService(req.params);

  if (data) {
    res.status(statusCode).json(data);
  }
};
