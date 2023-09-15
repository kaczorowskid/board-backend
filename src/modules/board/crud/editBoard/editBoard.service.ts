import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { BoardModel } from "../../../../models";
import { EditBoard, EditBoardParams } from "./editBoard.types";
import { boardHasBeenEdited } from "./editBoard.helper";

export const editBoardService = async ({
  id,
  title,
  description,
}: EditBoard & EditBoardParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    BoardModel.update(
      {
        title,
        description,
      },
      {
        where: { id },
      }
    );

    return boardHasBeenEdited();
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
