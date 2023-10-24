import jwt from "jsonwebtoken";
import { BoardModel } from "../../../../models";
import { CreateShareTokenRequest } from "../../../../contracts/board/board.type";

interface CreateShareBoardTokenService {
  chceckIfBoardExists: () => Promise<boolean>;
  createToken: () => string;
}

export const createShareBoardTokenService = async ({
  board_id,
}: CreateShareTokenRequest): Promise<CreateShareBoardTokenService> => {
  const chceckIfBoardExists = async (): Promise<boolean> => {
    const data = await BoardModel.findOne({
      where: {
        id: board_id,
      },
    });

    return !!data;
  };

  const createToken = (): string => {
    const token = jwt.sign({ board_id }, process.env.SHARE_BOARD_KEY!, {
      expiresIn: "1d",
    });

    return token;
  };

  return {
    chceckIfBoardExists,
    createToken,
  };
};
