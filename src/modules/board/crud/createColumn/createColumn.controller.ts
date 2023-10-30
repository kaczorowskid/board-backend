import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { createColumnService } from "./createColumn.service";
import { CreateColumnRequest } from "../../../../contracts/board/board.type";
import { createColumnRequestSchema } from "../../../../contracts/board/board.schema";

export const createColumn: ExpressMiddleware<
  unknown,
  CreateColumnRequest
> = async (req, res) => {
  try {
    const request = createColumnRequestSchema.parse(req.body);
    const { create } = await createColumnService(request);

    const result = await create();

    res.status(HTTPStatus.CREATED).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
