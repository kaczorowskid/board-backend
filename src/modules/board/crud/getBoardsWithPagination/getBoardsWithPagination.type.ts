import { BoardModel, SharedBoardModel, UserModel } from "../../../../models";

interface BoardWithSharedBoard extends BoardModel {
  sharedBoards: SharedBoardModel;
}

export interface UsersBoards extends UserModel {
  users_board: BoardWithSharedBoard[];
}
