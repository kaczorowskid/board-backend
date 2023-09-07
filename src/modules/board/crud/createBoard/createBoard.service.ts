import { v4 as uuidv4 } from "uuid";
import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { CreateBoard } from "./createBoard.types";
import { BoardModel } from "../../../../models";
import { boardHasBeenCreated } from "./createBoard.helper";

export const createBoardService = async ({
  title,
  description,
  user_id,
}: CreateBoard) => {
  const [data, error] = await sequelizeWithError(async () => {
    const board = await BoardModel.create({
      id: uuidv4(),
      title,
      description,
      user_id,
    });

    return boardHasBeenCreated(board);
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
