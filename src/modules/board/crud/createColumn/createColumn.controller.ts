import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { createColumnService } from "./createColumn.service";
import { CreateColumnRequest } from "../../../../contracts/board/board.type";

export const createColumn: ExpressMiddleware<
  unknown,
  CreateColumnRequest
> = async (req, res) => {
  try {
    const { create } = await createColumnService(req.body);

    const result = await create();

    res.status(HTTPStatus.CREATED).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
