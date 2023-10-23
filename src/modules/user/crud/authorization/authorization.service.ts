import jwt from "jsonwebtoken";
import { UserModel } from "../../../../models";
import { User } from "../../types";
import { Authorization } from "./authorization.type";

interface AuthorizationService {
  authorization: () => Promise<UserModel | null>;
}

export const authorizationService = async ({
  token,
}: Authorization): Promise<AuthorizationService> => {
  const authorization = async (): Promise<UserModel | null> => {
    const userId = jwt.verify(token, process.env.EMAIL_KEY!) as User;

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
