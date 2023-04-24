import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { UserModel } from "../../models";
import { UserResponse } from "../../types";
import { getUserData, userDoesNotExist } from "./getUser.helper";
import { GetUser } from "./GetUser.types";

export const getUserService = async ({
  email,
}: GetUser): Promise<UserResponse> => {
  return sequelizeWithError<Promise<UserResponse>>(async () => {
    const userData = await UserModel.findOne({
      where: { email },
      attributes: ["id", "email", "is_active"],
    });

    if (userData) {
      return getUserData(userData);
    } else {
      return userDoesNotExist();
    }
  });
};
