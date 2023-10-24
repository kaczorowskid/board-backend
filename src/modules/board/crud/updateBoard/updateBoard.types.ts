import { UpdateBoardRequest } from "../../../../contracts/board/board.type";

export interface UpdateBoardQuery extends Pick<UpdateBoardRequest, "id"> {}

export interface UpdateBoardBody
  extends Pick<UpdateBoardRequest, "title" | "columns"> {}
