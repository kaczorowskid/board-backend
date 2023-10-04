import { sequelizeWithError } from "../../../../database";
import { CalendarModel, CommentModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import {
  commentDoesNotExist,
  removedCommentSuccessfully,
} from "./removeComment.helper";
import { RemoveCommentParams } from "./removeComment.types";

export const removeCommentService = async ({ id }: RemoveCommentParams) => {
  const [data, error] = await sequelizeWithError(async () => {
    const ticketData = await CommentModel.destroy({ where: { id } });

    if (ticketData) {
      return removedCommentSuccessfully();
    } else {
      return commentDoesNotExist();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
