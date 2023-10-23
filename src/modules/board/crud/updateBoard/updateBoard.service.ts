import { sequelizeInstance } from "../../../../database";
import { updateBoard, updateColumn, updateTicket } from "./updateBoard.helper";
import { UpdateBoardBody, UpdateBoardQuery } from "./updateBoard.types";

interface UpdateBoardService {
  update: () => Promise<boolean>;
}

export const updateBoardService = async ({
  id: boardId,
  title,
  columns,
}: UpdateBoardQuery & UpdateBoardBody): Promise<UpdateBoardService> => {
  const update = async (): Promise<boolean> => {
    let success = false;
    const transaction = await sequelizeInstance.transaction();

    try {
      await updateBoard(boardId, title, transaction);

      await Promise.all(
        columns.map((columnData) => updateColumn(columnData, transaction))
      );

      await Promise.all(
        columns.map((columnData) =>
          Promise.all(
            columnData.tickets.map((ticketData) =>
              updateTicket(ticketData, transaction)
            )
          )
        )
      );

      await transaction.commit();

      success = true;
    } catch (error) {
      success = false;
      console.log("error ", error);
    }

    return success;
  };

  return {
    update,
  };
};
