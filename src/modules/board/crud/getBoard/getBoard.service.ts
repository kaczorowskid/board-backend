import { sequelizeInstance } from "../../../../database";
import { sequelizeWithError } from "../../../../database/sequelizeWithError";
import { BoardModel, ColumnModel, TicketModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import { boardDoesNotExist, getBoardData } from "./getBoard.helper";
import { GetBoardParams } from "./getBoard.types";

export const getBoardService = async ({ id }: GetBoardParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const boardData = await BoardModel.findOne({
      where: { id },
      include: [
        {
          model: ColumnModel,
          include: [
            {
              model: TicketModel,
            },
          ],
        },
      ],
      order: [
        [ColumnModel, "created_at", "asc"],
        [ColumnModel, TicketModel, "order", "asc"],
      ],
    });

    if (boardData) {
      return getBoardData(boardData);
    } else {
      return boardDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
