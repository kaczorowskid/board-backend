import { UserModel } from "../../../../models";
import { Update, UpdateParams } from "./updateUser.type";

interface UpdateUserService {
  update: () => Promise<boolean>;
}

export const updateUserService = async ({
  id,
  first_name,
  last_name,
}: UpdateParams & Update): Promise<UpdateUserService> => {
  const update = async (): Promise<boolean> => {
    const [affectedCount] = await UserModel.update(
      { first_name, last_name },
      { where: { id } }
    );

    return !!affectedCount;
  };

  return {
    update,
  };
};
