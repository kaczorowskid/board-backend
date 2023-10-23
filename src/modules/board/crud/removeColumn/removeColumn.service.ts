import { ColumnModel } from "../../../../models";
import { RemoveColumnParams } from "./removeColumn.types";

interface RemoveColumnService {
  remove: () => Promise<boolean>;
}

export const removeColumnService = async ({
  id,
}: RemoveColumnParams): Promise<RemoveColumnService> => {
  const remove = async (): Promise<boolean> => {
    const data = await ColumnModel.destroy({ where: { id } });

    return !!data;
  };

  return {
    remove,
  };
};
