import { BoardModel } from "../../../../models";
import { RemoveBoardRequest } from "../../../../contracts/board/board.type";

interface RemoveBoardService {
  remove: () => Promise<boolean>;
}

export const removeBoardService = async ({
  id,
}: RemoveBoardRequest): Promise<RemoveBoardService> => {
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
