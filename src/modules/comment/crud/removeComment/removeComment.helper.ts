import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { RemoveCommentEnum } from "./removeComment.enum";

export const removedCommentSuccessfully = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.OK),
  data: RemoveCommentEnum.COMMENT_REMOVED_SUCCESSFULLY,
});

export const commentDoesNotExist = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: RemoveCommentEnum.COMMENT_DOES_NOT_EXIST,
});
