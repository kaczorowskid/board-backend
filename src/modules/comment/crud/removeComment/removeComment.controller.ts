import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { removeCommentService } from "./removeComment.service";
import { RemoveCommentRequest } from "../../../../contracts/comment/comment.type";
import { removeCommentRequestSchema } from "../../../../contracts/comment/comments.schema";

export const removeComment: ExpressMiddleware<RemoveCommentRequest> = async (
  req,
  res
) => {
  try {
    const request = removeCommentRequestSchema.parse(req.params);
    const { remove } = await removeCommentService(request);

    const result = await remove();

    res
      .status(result ? HTTPStatus.OK : HTTPStatus.CONFLICT)
      .json({ deleted: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
