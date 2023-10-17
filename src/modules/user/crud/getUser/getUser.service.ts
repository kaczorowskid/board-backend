import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { UserModel } from "../../../../models";
import { GetUser } from "./getUser.types";
import { getUserData, userDoesNotExist } from "./getUser.helper";
import { somethingWentWrong } from "../../../helpers";

export const getUserService = async ({ id }: GetUser) => {
  const [data, error] = await sequelizeWithError(async () => {
    const userData = await UserModel.findOne({
      where: { id },
      attributes: ["id", "email", "is_active", "first_name", "last_name"],
    });

    if (userData) {
      return getUserData(userData);
    } else {
      return userDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
