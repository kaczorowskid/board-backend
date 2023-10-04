import jwt from "jsonwebtoken";
import { sequelizeWithError } from "../../../../database";
import { somethingWentWrong } from "../../../helpers";
import { BoardModel } from "../../../../models";
import { CreateShareBoardToken } from "./createShareBoardToken.types";
import {
  boardDoesNotExist,
  tokenHasBeenCreated,
} from "./createShareBoardToken.helper";

export const createShareBoardTokenService = async ({
  board_id,
}: CreateShareBoardToken) => {
  const [data, error] = await sequelizeWithError(async () => {
    const boardExist = await BoardModel.findOne({
      where: {
        id: board_id,
      },
    });

    if (boardExist) {
      const boardToken = jwt.sign({ board_id }, process.env.SHARE_BOARD_KEY!, {
        expiresIn: "1d",
      });
      return tokenHasBeenCreated(boardToken);
    } else {
      return boardDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
