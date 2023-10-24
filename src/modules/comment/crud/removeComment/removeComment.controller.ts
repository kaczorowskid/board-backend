import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { removeCommentService } from "./removeComment.service";
import { RemoveCommentRequest } from "../../../../contracts/comment/comment.type";

export const removeComment: ExpressMiddleware<RemoveCommentRequest> = async (
  req,
  res
) => {
  try {
    const { remove } = await removeCommentService(req.params);

    const result = await remove();

    res
      .status(result ? HTTPStatus.OK : HTTPStatus.CONFLICT)
      .json({ deleted: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
