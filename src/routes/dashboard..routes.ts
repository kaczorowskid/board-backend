import { Router } from "express";
import { getDashboardData } from "../modules";

export const dashboardRouter = Router();

dashboardRouter.get("/:user_id", getDashboardData);
