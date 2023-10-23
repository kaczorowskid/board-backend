import jwt from "jsonwebtoken";
import { UserModel } from "../../../../models";
import { User } from "../../types";
import { ConfirmAccount } from "./confirmAccount.type";

interface ConfirmAccountService {
  confirm: () => Promise<boolean>;
}

export const confirmAccountService = async ({
  token,
}: ConfirmAccount): Promise<ConfirmAccountService> => {
  const confirm = async (): Promise<boolean> => {
    const userId = jwt.verify(token, process.env.EMAIL_KEY!) as User;

    const [affectedCount] = await UserModel.update(
      { is_active: true },
      { where: { id: userId.id } }
    );

    return !!affectedCount;
  };

  return {
    confirm,
  };
};
