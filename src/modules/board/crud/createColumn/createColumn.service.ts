import { v4 as uuidv4 } from "uuid";
import { ColumnModel } from "../../../../models";
import { CreateColumnRequest } from "../../../../contracts/board/board.type";

interface CreateColumnService {
  create: () => Promise<ColumnModel>;
}

export const createColumnService = async ({
  title,
  board_id,
}: CreateColumnRequest): Promise<CreateColumnService> => {
  const create = async (): Promise<ColumnModel> => {
    const data = await ColumnModel.create({
      id: uuidv4(),
      title,
      board_id,
    });

    return data;
  };

  return {
    create,
  };
};
