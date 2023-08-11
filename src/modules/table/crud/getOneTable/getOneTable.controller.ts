import { ExpressMiddleware } from "../../../../types";
import { getOneTableService } from "./getOneTable.service";
import { GetOneTable, GetOneTableParams } from "./getOneTables.type";

export const getOneTable: ExpressMiddleware<
  GetOneTableParams,
  GetOneTable
> = async (req, res) => {
  const { statusCode, data } = await getOneTableService({
    ...req.params,
    ...req.body,
  });

  if (data) {
    res.status(statusCode).json(data);
  }
};
