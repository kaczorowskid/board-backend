import jwt from "jsonwebtoken";
import { BoardModel, SharedBoardModel } from "../../../../models";
import { v4 as uuidv4 } from "uuid";
import { ConfirmShareBoard } from "./confirmShareBoardToken.types";

interface ConfirmShareBoardTokenService {
  boardData: () => Promise<BoardModel | null>;
  createSharedBoard: (board_id: string) => Promise<SharedBoardModel>;
}

export const confirmShareBoardTokenService = async ({
  token,
  user_id,
}: ConfirmShareBoard): Promise<ConfirmShareBoardTokenService> => {
  const boardData = async (): Promise<BoardModel | null> => {
    const { board_id } = jwt.verify(token, process.env.SHARE_BOARD_KEY!) as {
      board_id: string;
    };

    const data = await BoardModel.findOne({
      where: {
        id: board_id,
      },
    });

    return data;
  };

  const createSharedBoard = async (
    board_id: string
  ): Promise<SharedBoardModel> => {
    const data = await SharedBoardModel.create({
      id: uuidv4(),
      user_id,
      board_id,
    });

    return data;
  };

  return {
    boardData,
    createSharedBoard,
  };
};
