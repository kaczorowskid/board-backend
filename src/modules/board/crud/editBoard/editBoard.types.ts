import { EditBoardRequest } from "../../../../contracts/board/board.type";

export interface EditBoard
  extends Pick<EditBoardRequest, "title" | "description"> {}

export interface EditBoardParams extends Pick<EditBoardRequest, "id"> {}
