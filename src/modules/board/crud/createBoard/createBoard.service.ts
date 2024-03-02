import { v4 as uuidv4 } from "uuid";
import { CreateBoardRequest } from "../../../../contracts/board/board.type";
import { BoardModel, SharedBoardModel } from "../../../../models";
import { sequelizeInstance } from "../../../../database";

interface CreateBoardService {
  createBoard: () => Promise<BoardModel>;
}

export const createBoardService = async ({
  title,
  description,
  user_id,
}: CreateBoardRequest): Promise<CreateBoardService> => {
  const createBoard = async (): Promise<BoardModel> => {
    const transaction = await sequelizeInstance.transaction();
    const boardId = uuidv4();

    const data = await BoardModel.create(
      {
        id: boardId,
        title,
        description,
        user_id,
        owner_id: user_id,
      },
      { transaction }
    );

    await SharedBoardModel.create(
      {
        id: uuidv4(),
        user_id,
        board_id: boardId,
      },
      { transaction }
    );

    transaction.commit();

    return data;
  };

  return {
    createBoard,
  };
};
