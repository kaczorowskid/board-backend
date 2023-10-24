import { CommentModel } from "../../../../models";
import { RemoveCommentRequest } from "../../../../contracts/comment/comment.type";

interface RemoveCommentService {
  remove: () => Promise<boolean>;
}

export const removeCommentService = async ({
  id,
}: RemoveCommentRequest): Promise<RemoveCommentService> => {
  const remove = async (): Promise<boolean> => {
    const data = await CommentModel.destroy({ where: { id } });
    return !!data;
  };

  return {
    remove,
  };
};
