import jwt from "jsonwebtoken";
import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { BoardModel, SharedBoardModel } from "../../../../models";
import { v4 as uuidv4 } from "uuid";
import { ConfirmShareBoard } from "./confirmShareBoardToken.types";
import {
  boardDoesNotExist,
  boardHasBeenShared,
} from "./confirmShareBoardToken.helper";

export const confirmShareBoardTokenService = async ({
  token,
  user_id,
}: ConfirmShareBoard) => {
  const [data, error] = await sequelizeWithError(async () => {
    const { board_id } = jwt.verify(token, process.env.SHARE_BOARD_KEY!) as {
      board_id: string;
    };

    console.log("board_id ", board_id);

    const boardExist = await BoardModel.findOne({
      where: {
        id: board_id,
      },
    });

    if (boardExist) {
      await SharedBoardModel.create({
        id: uuidv4(),
        user_id,
        board_id: board_id,
      });
      return boardHasBeenShared();
    } else {
      return boardDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
