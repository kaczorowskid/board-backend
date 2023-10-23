import { ColumnModel } from "../../../../models";
import { GetColumnParams } from "./getColumn.types";

interface GetColumnService {
  get: () => Promise<ColumnModel | null>;
}

export const getColumnService = async ({
  id,
}: GetColumnParams): Promise<GetColumnService> => {
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
