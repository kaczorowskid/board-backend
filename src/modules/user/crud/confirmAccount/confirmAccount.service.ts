import jwt from "jsonwebtoken";
import { UserModel } from "../../../../models";
import { ConfirmAccountUserRequest } from "../../../../contracts/user/user.type";

interface ConfirmAccountService {
  confirm: () => Promise<boolean>;
}

export const confirmAccountService = async ({
  token,
}: ConfirmAccountUserRequest): Promise<ConfirmAccountService> => {
  const confirm = async (): Promise<boolean> => {
    const userId = jwt.verify(token as string, process.env.ACCESS_KEY!) as {
      id: string;
    };

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
