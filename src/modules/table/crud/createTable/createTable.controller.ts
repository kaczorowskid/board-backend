import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { createTableService } from "./createTable.service";
import { CreateTable, CreateTableParams } from "./createTable.type";

export const createTable: ExpressMiddleware<
  CreateTableParams,
  CreateTable
> = async (req, res) => {
  const data = await createTableService({
    ...req.params,
    ...req.body,
  });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
