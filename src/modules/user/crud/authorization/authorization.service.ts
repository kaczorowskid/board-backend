import jwt from "jsonwebtoken";
import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { UserModel } from "../../../../models";
import { User } from "../../types";
import { somethingWentWrong } from "../../../helpers";
import { Authorization } from "./authorization.type";
import {
  cookieRequired,
  userAuthorized,
  userDoesNotExist,
} from "./authorization.helper";

export const authorizationService = async ({ token }: Authorization) => {
  const [data, error] = await sequelizeWithError(async () => {
    if (!token) {
      return cookieRequired();
    } else {
      const userId = jwt.verify(token, process.env.EMAIL_KEY!) as User;

      if (userId) {
        const userData = await UserModel.findOne({
          where: { id: userId.id },
          attributes: ["id", "email", "is_active", "first_name", "last_name"],
        });

        if (userData) {
          return userAuthorized(userData);
        } else {
          return userDoesNotExist();
        }
      }
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
