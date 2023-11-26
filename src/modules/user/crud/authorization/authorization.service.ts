import jwt from "jsonwebtoken";
import { UserModel } from "../../../../models";
import { AuthorizeUserRequest } from "../../../../contracts/user/user.type";

interface AuthorizationService {
  authorization: () => Promise<UserModel | null>;
}

export const authorizationService = async ({
  token,
}: AuthorizeUserRequest): Promise<AuthorizationService> => {
  const authorization = async (): Promise<UserModel | null> => {
    const userId = jwt.verify(token as string, process.env.ACCESS_KEY!) as {
      id: string;
    };

    const data = await UserModel.findOne({
      where: { id: userId.id },
      attributes: ["id", "email", "is_active", "first_name", "last_name"],
    });

    return data;
  };

  return {
    authorization,
  };
};
