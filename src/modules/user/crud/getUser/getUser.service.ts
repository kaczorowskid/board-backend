import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { UserModel } from "../../../../models";
import { UserResponse } from "../../types";
import { GetUser } from "./getUser.types";
import { getUserData, userDoesNotExist } from "./getUser.helper";

export const getUserService = async ({
  id,
}: GetUser): Promise<UserResponse> => {
  return sequelizeWithError<Promise<UserResponse>>(async () => {
    const userData = await UserModel.findOne({
      where: { id },
      attributes: ["id", "email", "is_active", "name"],
    });

    if (userData) {
      return getUserData(userData);
    } else {
      return userDoesNotExist();
    }
  });
};
