import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { CreateCommentResult } from "./createComment.enum";
import { createCommentService } from "./createComment.service";
import { CreateCommentRequest } from "../../../../contracts/comment";

export const createComment: ExpressMiddleware<
  unknown,
  CreateCommentRequest
> = async (req, res) => {
  try {
    const { checkIfTicketExist, createComment } = await createCommentService(
      req.body
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
