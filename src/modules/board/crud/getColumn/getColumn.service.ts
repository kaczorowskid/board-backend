import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { ColumnModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import { columnDoesNotExist, getColumnData } from "./getColumn.helper";
import { GetColumnParams } from "./getColumn.types";

export const getColumnService = async ({ id }: GetColumnParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const columnData = await ColumnModel.findOne({
      where: { id },
    });

    if (columnData) {
      return getColumnData(columnData);
    } else {
      return columnDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
