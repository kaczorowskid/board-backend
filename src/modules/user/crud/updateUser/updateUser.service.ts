import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { UserModel } from "../../../../models";
import { Update, UpdateParams } from "./updateUser.type";
import { hasBeenUpdated, userDoesNotExist } from "./updateUser.helper";
import { somethingWentWrong } from "../../../helpers";

export const updateUserService = async ({
  id,
  first_name,
  last_name,
}: UpdateParams & Update) => {
  const [data, error] = await sequelizeWithError(async () => {
    const user = await UserModel.findOne({ where: { id } });

    if (user) {
      await UserModel.update({ first_name, last_name }, { where: { id } });

      return hasBeenUpdated();
    } else {
      return userDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
