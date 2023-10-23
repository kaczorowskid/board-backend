import { CommentModel } from "../../../../models";
import { RemoveCommentParams } from "./removeComment.types";

interface RemoveCommentService {
  remove: () => Promise<boolean>;
}

export const removeCommentService = async ({
  id,
}: RemoveCommentParams): Promise<RemoveCommentService> => {
  const remove = async (): Promise<boolean> => {
    const data = await CommentModel.destroy({ where: { id } });
    return !!data;
  };

  return {
    remove,
  };
};
