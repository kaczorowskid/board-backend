import { ColumnModel } from "../../../../models";
import { EditColumn, EditColumnParams } from "./editColumn.types";

interface EditColumnService {
  edit: () => Promise<boolean>;
}

export const editColumnService = async ({
  id,
  title,
}: EditColumn & EditColumnParams): Promise<EditColumnService> => {
  const edit = async (): Promise<boolean> => {
    const [affectedCount] = await ColumnModel.update(
      {
        title,
      },
      {
        where: { id },
      }
    );

    return !!affectedCount;
  };

  return {
    edit,
  };
};
