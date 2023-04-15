import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { UserModel } from "../../models";
import { UserResponse } from "../../types";
import { Update, UpdateParams } from "./updateUser.type";
import { hasBeenUpdated, userDoesNotExist } from "./updateUser.helper";

export const updateUserService = async ({
  id,
  name,
}: UpdateParams & Update): Promise<UserResponse> => {
  return sequelizeWithError<Promise<UserResponse>>(async () => {
    const user = await UserModel.findOne({ where: { id } });

    if (user) {
      await UserModel.update({ name }, { where: { id } });

      return hasBeenUpdated();
    } else {
      return userDoesNotExist();
    }
  });
};
