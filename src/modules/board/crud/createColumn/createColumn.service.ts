import { v4 as uuidv4 } from "uuid";
import { ColumnModel } from "../../../../models";
import { CreateColumn } from "./createColumn.types";

interface CreateColumnService {
  create: () => Promise<ColumnModel>;
}

export const createColumnService = async ({
  title,
  board_id,
}: CreateColumn): Promise<CreateColumnService> => {
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
