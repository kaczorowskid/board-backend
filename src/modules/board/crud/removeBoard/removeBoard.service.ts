import { BoardModel } from "../../../../models";
import { RemoveBoardParams } from "./removeBoard.types";

interface RemoveBoardService {
  remove: () => Promise<boolean>;
}

export const removeBoardService = async ({
  id,
}: RemoveBoardParams): Promise<RemoveBoardService> => {
  const remove = async (): Promise<boolean> => {
    const data = BoardModel.destroy({
      where: { id },
    });

    return !!data;
  };

  return {
    remove,
  };
};
