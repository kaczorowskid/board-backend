import { v4 as uuidv4 } from "uuid";
import { CommentModel, TicketModel } from "../../../../models";
import { CreateComment } from "./createComment.type";

interface CreateCommentService {
  checkIfTicketExist: () => Promise<boolean>;
  createComment: () => Promise<CommentModel>;
}

export const createCommentService = async ({
  text,
  ticket_id,
  user_id,
}: CreateComment): Promise<CreateCommentService> => {
  const checkIfTicketExist = async (): Promise<boolean> => {
    const data = await TicketModel.count({ where: { id: ticket_id } });
    return !!data;
  };

  const createComment = async (): Promise<CommentModel> => {
    const comment = await CommentModel.create({
      id: uuidv4(),
      text,
      ticket_id,
      user_id,
    });

    return comment;
  };

  return {
    checkIfTicketExist,
    createComment,
  };
};
