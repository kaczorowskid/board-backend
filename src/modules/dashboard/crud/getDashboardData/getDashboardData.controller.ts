import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { getDashboardDataService } from "./getDashboardData.service";
import { GetDashboardDataParam } from "./getDashboardData.types";

export const getDashboardData: ExpressMiddleware<
  GetDashboardDataParam
> = async (req, res) => {
  const data = await getDashboardDataService(req.params);

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
