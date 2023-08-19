import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getOneTableService } from "./getOneTable.service";
import { GetOneTableParams } from "./getOneTables.type";

export const getOneTable: ExpressMiddleware<GetOneTableParams> = async (
  req,
  res
) => {
  const data = await getOneTableService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
