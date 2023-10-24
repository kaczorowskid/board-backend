import { EditColumnRequest } from "../../../../contracts/board/board.type";

export interface EditColumn extends Pick<EditColumnRequest, "title"> {}

export interface EditColumnParams extends Pick<EditColumnRequest, "id"> {}
