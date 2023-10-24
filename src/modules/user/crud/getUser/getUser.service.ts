import { UserModel } from "../../../../models";
import { GetUserRequest } from "../../../../contracts/user/user.type";

interface GetUserService {
  get: () => Promise<UserModel | null>;
}

export const getUserService = async ({
  id,
}: GetUserRequest): Promise<GetUserService> => {
  const get = async (): Promise<UserModel | null> => {
    const data = await UserModel.findOne({
      where: { id },
      attributes: ["id", "email", "is_active", "first_name", "last_name"],
    });

    return data;
  };

  return {
    get,
  };
};
