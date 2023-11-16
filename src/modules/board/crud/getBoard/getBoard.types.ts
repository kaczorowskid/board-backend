import { GetBoardRequest } from "../../../../contracts/board/board.type";

export type CustomGetBoardRequest = Pick<GetBoardRequest, "id">;
export type CustomGetBoardRequestQuery = Omit<GetBoardRequest, "id">;
