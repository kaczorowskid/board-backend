import { ColumnModel } from "../../../../models";
import { RemoveColumnRequest } from "../../../../contracts/board/board.type";

interface RemoveColumnService {
  remove: () => Promise<boolean>;
}

export const removeColumnService = async ({
  id,
}: RemoveColumnRequest): Promise<RemoveColumnService> => {
  const remove = async (): Promise<boolean> => {
    const data = await ColumnModel.destroy({ where: { id } });

    return !!data;
  };

  return {
    remove,
  };
};
