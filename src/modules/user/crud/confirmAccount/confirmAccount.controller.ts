import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { confirmAccountService } from "./confirmAccount.service";
import { ConfirmAccount } from "./confirmAccount.type";

export const confirmAccount: ExpressMiddleware<ConfirmAccount> = async (
  req,
  res
) => {
  try {
    const { confirm } = await confirmAccountService(req.params);

    const result = await confirm();
    res.status(HTTPStatus.OK).send(result || []);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
