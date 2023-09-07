import { v4 as uuidv4 } from "uuid";
import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { ColumnModel } from "../../../../models";
import { CreateColumn } from "./createColumn.types";
import { columnHasBeenCreated } from "./createColumn.helper";

export const createColumnService = async ({
  title,
  board_id,
}: CreateColumn) => {
  const [data, error] = await sequelizeWithError(async () => {
    const column = await ColumnModel.create({
      id: uuidv4(),
      title,
      board_id,
    });

    return columnHasBeenCreated(column);
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
