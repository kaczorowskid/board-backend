import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { CreateCommentResult } from "./createComment.enum";
import { createCommentService } from "./createComment.service";
import { CreateCommentRequest } from "../../../../contracts/comment/comment.type";
import { createCommentRequestSchema } from "../../../../contracts/comment/comments.schema";

export const createComment: ExpressMiddleware<
  unknown,
  CreateCommentRequest
> = async (req, res) => {
  try {
    const request = createCommentRequestSchema.parse(req.body);
    const { checkIfTicketExist, createComment } = await createCommentService(
      request
    );

    const isExists = await checkIfTicketExist();

    if (!isExists) {
      res.status(HTTPStatus.CONFLICT).json({
        result: CreateCommentResult.TICKET_DOESNT_EXIST_IN_THE_DATABASE,
      });
    }

    const result = await createComment();

    res.status(HTTPStatus.CREATED).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
