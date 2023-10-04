import { v4 as uuidv4 } from "uuid";
import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { CreateBoard } from "./createBoard.types";
import { BoardModel, SharedBoardModel } from "../../../../models";
import { boardHasBeenCreated } from "./createBoard.helper";

export const createBoardService = async ({
  title,
  description,
  user_id,
}: CreateBoard) => {
  const [data, error] = await sequelizeWithError(async () => {
    const boardId = uuidv4();

    const board = await BoardModel.create({
      id: boardId,
      title,
      description,
      user_id,
    });

    await SharedBoardModel.create({
      id: uuidv4(),
      user_id,
      board_id: boardId,
    });

    return boardHasBeenCreated(board);
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
