import { ExpressMiddleware } from "../../../../types";
import { getAllTablesService } from "./getAllTables.service";
import { GetAllTablesQuery } from "./getAllTables.type";

export const getAllTables: ExpressMiddleware<
  unknown,
  unknown,
  GetAllTablesQuery
> = async (req, res) => {
  const { statusCode, data } = await getAllTablesService(req.query);

  if (data) {
    res.status(statusCode).json(data);
  }
};
