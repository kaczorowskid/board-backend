import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getOneTableService } from "./getOneTable.service";
import { GetOneTable, GetOneTableParams } from "./getOneTables.type";

export const getOneTable: ExpressMiddleware<
  GetOneTableParams,
  GetOneTable
> = async (req, res) => {
  const data = await getOneTableService({
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
