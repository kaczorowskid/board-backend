import { BoardModel } from "../../../../models";
import { EditBoard, EditBoardParams } from "./editBoard.types";

interface EditBoardService {
  edit: () => Promise<boolean>;
}

export const editBoardService = async ({
  id,
  title,
  description,
}: EditBoard & EditBoardParams): Promise<EditBoardService> => {
  const edit = async (): Promise<boolean> => {
    const [affectedCount] = await BoardModel.update(
      {
        title,
        description,
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
