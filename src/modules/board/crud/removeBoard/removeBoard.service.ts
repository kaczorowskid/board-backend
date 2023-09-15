import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { BoardModel } from "../../../../models";
import { RemoveBoardParams } from "./removeBoard.types";
import { boardHasBeenRemoved } from "./removeBoard.helper";

export const removeBoardService = async ({ id }: RemoveBoardParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const board = BoardModel.destroy({
      where: { id },
    });

    return boardHasBeenRemoved();
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
