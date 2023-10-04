import { v4 as uuidv4 } from "uuid";
import { sequelizeWithError } from "../../../../database";
import { CommentModel, TicketModel } from "../../../../models";
import { somethingWentWrong } from "../../../helpers";
import { CreateComment } from "./createComment.type";
import {
  commentHasBeenCreated,
  ticketDoesntExistInTheDatabase,
} from "./createComment.helper";

export const createCommentService = async ({
  text,
  ticket_id,
  user_id,
}: CreateComment) => {
  const [data, error] = await sequelizeWithError(async () => {
    const isTicketExist = await TicketModel.count({ where: { id: ticket_id } });

    if (isTicketExist) {
      const folder = await CommentModel.create({
        id: uuidv4(),
        text,
        ticket_id,
        user_id,
      });

      return commentHasBeenCreated(folder);
    } else {
      return ticketDoesntExistInTheDatabase();
    }
  });

  if (error) {
    return somethingWentWrong({ error });
  }

  return data;
};
