import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Comment } from "../../types";
import { CreateCommentEnum } from "./createComment.enum";

export const commentHasBeenCreated = (
  data: Comment
): DataResponse<Comment> => ({
  statusCode: Number(HTTPStatus.CREATED),
  data,
});

export const ticketDoesntExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.CONFLICT),
  data: CreateCommentEnum.TICKET_DOESNT_EXIST_IN_THE_DATABASE,
});
