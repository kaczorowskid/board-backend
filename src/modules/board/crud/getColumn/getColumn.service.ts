import { ColumnModel } from "../../../../models";
import { GetColumnRequest } from "../../../../contracts/board/board.type";

interface GetColumnService {
  get: () => Promise<ColumnModel | null>;
}

export const getColumnService = async ({
  id,
}: GetColumnRequest): Promise<GetColumnService> => {
  const get = async (): Promise<ColumnModel | null> => {
    const data = await ColumnModel.findOne({
      where: { id },
    });

    return data;
  };
  return {
    get,
  };
};
