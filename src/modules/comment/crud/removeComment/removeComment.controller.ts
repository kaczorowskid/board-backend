import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { removeCommentService } from "./removeComment.service";
import { RemoveCommentParams } from "./removeComment.types";

export const removeComment: ExpressMiddleware<RemoveCommentParams> = async (
  req,
  res
) => {
  const data = await removeCommentService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
