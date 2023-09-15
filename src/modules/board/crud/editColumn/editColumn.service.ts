import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { ColumnModel } from "../../../../models";
import { EditColumn, EditColumnParams } from "./editColumn.types";
import { columnHasBeenEdited } from "./editColumn.helper";

export const editColumnService = async ({
  id,
  title,
}: EditColumn & EditColumnParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    ColumnModel.update(
      {
        title,
      },
      {
        where: { id },
      }
    );

    return columnHasBeenEdited();
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
