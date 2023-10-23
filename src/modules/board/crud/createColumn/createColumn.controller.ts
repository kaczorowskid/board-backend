import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { createColumnService } from "./createColumn.service";
import { CreateColumn } from "./createColumn.types";

export const createColumn: ExpressMiddleware<unknown, CreateColumn> = async (
  req,
  res
) => {
  try {
    const { create } = await createColumnService(req.body);

    const result = await create();

    res.status(HTTPStatus.CREATED).send(result);
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
