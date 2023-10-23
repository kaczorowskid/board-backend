import { v4 as uuidv4 } from "uuid";
import { CreateBoard } from "./createBoard.types";
import { BoardModel, SharedBoardModel } from "../../../../models";

interface CreateBoardService {
  createBoard: (boardId: string) => Promise<BoardModel>;
  createSharedBoard: (boardId: string) => Promise<SharedBoardModel>;
}

export const createBoardService = async ({
  title,
  description,
  user_id,
}: CreateBoard) => {
  const createBoard = async (boardId: string): Promise<BoardModel> => {
    const data = await BoardModel.create({
      id: boardId,
      title,
      description,
      user_id,
      owner_id: user_id,
    });

    return data;
  };

  const createSharedBoard = async (
    boardId: string
  ): Promise<SharedBoardModel> => {
    const data = await SharedBoardModel.create({
      id: uuidv4(),
      user_id,
      board_id: boardId,
    });

    return data;
  };

  return {
    createBoard,
    createSharedBoard,
  };
};
