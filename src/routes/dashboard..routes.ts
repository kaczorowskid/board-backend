import { Router } from "express";
import { getDashboardData } from "../modules";
import { authentication } from "../middleware";

export const dashboardRouter = Router();

dashboardRouter.get("/:user_id", authentication, getDashboardData);
