import { sequelizeInstance } from "../../../../database";
import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { BoardModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import {
  boardDoesNotExist,
  updateBoardSuccessfully,
} from "./updateBoard.helper";
import {
  updateBoard,
  updateColumn,
  updateTicket,
} from "./updateBoard.repository";
import {
  UpdateBoardBody,
  UpdateBoardQuery,
  UpdateColumns,
  UpdateTickets,
} from "./updateBoard.types";

export const updateBoardService = async ({
  id: boardId,
  title,
  columns,
}: UpdateBoardQuery & UpdateBoardBody) => {
  const [data, error] = await sequelizeWithError(async () => {
    const board = await BoardModel.findOne({ where: { id: boardId } });

    console.log("columns ", columns);

    if (board) {
      const transaction = await sequelizeInstance.transaction();

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

      return updateBoardSuccessfully();
    } else {
      return boardDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};

// const board = await BoardModel.findOne({ where: { id: boardId } });

// if (board) {
//   const transaction = await sequelizeInstance.transaction();

//   await updateBoard(boardId, title, transaction);

//   // Przy użyciu map do edycji danych w ColumnModel
//   await Promise.all(
//     columns.map((columnData: any) => updateColumn(columnData, transaction))
//   );

//   await transaction.commit(); // Zatwierdź transakcję
