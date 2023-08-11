import { ExpressMiddleware } from "../../../../types";
import { createTableService } from "./createTable.service";
import { CreateTable, CreateTableParams } from "./createTable.type";

export const createTable: ExpressMiddleware<
  CreateTableParams,
  CreateTable
> = async (req, res) => {
  const { statusCode, data } = await createTableService({
    ...req.params,
    ...req.body,
  });

  if (data) {
    res.status(statusCode).json(data);
  }
};
