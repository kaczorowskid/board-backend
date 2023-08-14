import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getAllTablesService } from "./getAllTables.service";
import { GetAllTablesQuery } from "./getAllTables.type";

export const getAllTables: ExpressMiddleware<
  unknown,
  unknown,
  GetAllTablesQuery
> = async (req, res) => {
  const data = await getAllTablesService(req.query);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
