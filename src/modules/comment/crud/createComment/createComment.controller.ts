import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { createCommentService } from "./createComment.service";
import { CreateComment } from "./createComment.type";

export const createComment: ExpressMiddleware<unknown, CreateComment> = async (
  req,
  res
) => {
  const data = await createCommentService(req.body);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json(data.data);
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
