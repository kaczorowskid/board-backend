import { sequelizeWithError } from "../../../../database";
import { ColumnModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import {
  columnDoesNotExist,
  removedColumnSuccessfully,
} from "./removeColumn.helper";
import { RemoveColumnParams } from "./removeColumn.types";

export const removeColumnService = async ({ id }: RemoveColumnParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const column = await ColumnModel.destroy({ where: { id } });

    if (column) {
      return removedColumnSuccessfully();
    } else {
      return columnDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
