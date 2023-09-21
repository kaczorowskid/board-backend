import { HTTPStatus } from "../../../../utils";
import { DataResponse } from "../../../helpers";
import { Dahsboard } from "../types/Dashboard.types";
import { GetDashboardDataEnum } from "./getDashboardData.enum";

export const dashboardExist = (data: Dahsboard): DataResponse<Dahsboard> => ({
  statusCode: Number(HTTPStatus.OK),
  data,
});

export const dashboardDoesNotExistInTheDatabase = (): DataResponse<string> => ({
  statusCode: Number(HTTPStatus.NOT_FOUND),
  data: GetDashboardDataEnum.DASHBOARD_DOES_NOT_EXIST_IN_THE_DATABASE,
});
